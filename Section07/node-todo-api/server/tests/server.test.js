const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'first to do'
        }, {
    _id: new ObjectID(),
    text: 'Second to do',
    completed: true,
    completedAt: 333
        }];


beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos)
    }).then(() => done());
});

describe('POST /todos', () => {
    it('Should post a new todos', (done) => {
       let text = 'A new task added';

       request(app).post('/todos').send({text}).expect(200).expect((res) => {
           expect(res.body.text).toBe(text);
       }).end((err, res) => {
           if(err){
               return done(err);
           }

           Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
           }).catch((e) => done(e));

       });

    });

    it('should not create todo with invalid body data', (done) => {

        request(app).post('/todos').send({}).expect(400).end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));

        });

    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app).get('/todos').expect(200).expect((res) => {
            expect(res.body.todos.length).toBe(2);
        }).end(done);
    });
});

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app).get(`/todos/${todos[0]._id.toHexString()}`).expect(200).expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        }).end(done);
    });

    it('should return 404 if todo not found', (done) => {
        request(app).get(`/todos/${new ObjectID().toHexString()}`).expect(404).end(done);
    });

    it('should return a 404 for non-object ids', (done) => {
        request(app).get('/todos/123').expect(404).end(done);
    });

});


describe('DELETE /todos/:id', () => {
    it('Should remove a todo', (done) => {
        let hexID = todos[1]._id.toHexString();

        request(app).delete(`/todos/${hexID}`).expect(200).expect((res) => {
            expect(res.body.todo._id).toBe(hexID);
        }).end((err, res) => {
            if(err){
                return done(err);
            }

            Todo.findById(hexID).then((todo) => {
                expect(todo).toNotExist();
                done();
            }).catch((e) => done());
        });

    });

    it('Should return 404 if todo not found', (done) => {
        request(app).delete(`/todos/${new ObjectID().toHexString()}`).expect(404).end(done);
    });

    it('Should return 404 if object id is invalid', (done) => {
        request(app).delete('/todos/123').expect(404).end(done);
    });
});

describe('PATCH /todos/:id', () => {
    it('should update the todo', (done) => {
        let hexID = todos[0]._id.toHexString();

        request(app).patch(`/todos/${hexID}`).send({text: "updates progress", completed: true}).expect(200)
            .expect((res) =>{
            expect(res.body.todo.text).toBe("updates progress");
            expect(res.body.todo.completed).toBe(true);
            expect(res.body.todo.completedAt).toBeA('number');
            }).end(done);

    });

    it('should clear completed at when todo is not completed', (done) => {
        let hexID = todos[1]._id.toHexString();

        request(app).patch(`/todos/${hexID}`).send({text: "no progress", completed: false}).expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe("no progress");
                expect(res.body.todo.completed).toBe(false);
                expect(res.body.todo.completedAt).toNotExist();
            }).end(done);
    });
});