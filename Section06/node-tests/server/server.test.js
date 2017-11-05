const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world,', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({error: 'error'});
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should find that you exist', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: 'BSW', age: '33'});
                })
                .end(done);
        });
    });
});