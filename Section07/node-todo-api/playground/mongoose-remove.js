const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

Todo.findOneAndRemove({_id: '5a18abb019099b372f9c81b2'}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('5a18abb019099b372f9c81b2').then((todo) => {
    console.log(todo);
});
