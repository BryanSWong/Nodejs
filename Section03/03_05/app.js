console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Mike']);
console.log(filteredArray);


// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

/*
* challenge: make a new function called add with 2 variables 'a' and 'b'
* have them added together and return the result.
* then using the app call the add module and display the result.
* */

//var sum = notes.add(9, -2);

//console.log('Results: ' + sum);

// you can also use
// console.log('Results:',notes.add(9, -2));


// var user = os.userInfo();

// var res = notes.addNote();
// console.log(res);

//console.log(user);

// fs.appendFile('greetings.txt','Hello world!');
// this appendFile call has been deprecated so the following
// are ways around to advoid getting the error warning.

/*
fs.appendFile('greeting.txt', 'Hello world!', function(err){
    if(err){
        console.log('Unable to write to file')
    }
});

*/

// both performs the same function.
// fs.appendFileSync('greetings.txt', 'Hello world!');

// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

// note the `(the "tick" key can be found next to the "1" key
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);