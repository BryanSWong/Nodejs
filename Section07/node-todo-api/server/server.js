let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({
//     text: '   complete this video'
// });
//
// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (err) => {
//     console.log('Unable to save todo.')
// });

let User = mongoose.model('User', {
    user: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});

let newUser = new User({
    user: 'Newguy',
    email: 'newguy@service.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('unable to add User', err);
});