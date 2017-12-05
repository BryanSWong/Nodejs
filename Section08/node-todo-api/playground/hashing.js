const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


let password = '123abc';
let checker = "1";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {

    });
});

console.log(checker);

let hashedPassword = '$2a$10$ZL9MCsmWdmwQBsSeNFisMe6IbxcamQvEWL6Jal1bMJNrJ0s95h3QC';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// let data = {
//     id: 19
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);

// let message = 'Im am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`HASH: ${hash}`);
//
// let data = {
//     id: 4,
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash){
//     console.log('Data was not changed');
// } else{
//     console.log('Data was changed. Do not trust');
// }
