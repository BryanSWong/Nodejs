// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
//     if(errorMessage){
//         console.log(errorMessage);
//     } else{
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });



const request = require('request');

let key = 'ea998cfeaafa6e778b8a906c9ea81167';

let link = 'https://api.darksky.net/forecast/' + key + '/40.72557219999999,-73.8624893';

request({
    url: link,
    json: true}, (error, response, body) => {
    if(error){
        console.log("Unable to connect to forecast.io");
    } else if(response.statusCode === 400){
        console.log("Unable to fetch weather.");
    } else if(response.statusCode === 200){
        console.log(`Temperature is : ${body.currently.temperature}`);
    }
});

// this is updated code but does not seem to work...
// if(!error && response === 200){
//     console.log(`Temperature is : ${body.currently.temperature}`);
// } else {
//     console.log("Unable to fetch weather.");
// }