console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

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
//fs.appendFileSync('greetings.txt', 'Hello world!');

//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

// note the `(the "tick" key can be found next to the "1" key
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);