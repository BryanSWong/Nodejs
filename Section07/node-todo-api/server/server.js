let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});


// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

let newTodo = new Todo({
    text: 'Finish up watching up to video 15',
    completed: true,
    completedAt: 11162017
});

newTodo.save().then((doc) => {
    console.log('Save todo', doc);
}, (err) => {
    console.log('Unable to save todo.')
});