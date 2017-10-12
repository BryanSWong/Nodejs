
const request = require('request');

//let key = 'ea998cfeaafa6e778b8a906c9ea81167';

//let link = 'https://api.darksky.net/forecast/' + key;

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ea998cfeaafa6e778b8a906c9ea81167/${lat},${lng}`,
        json: true},
        (error, response, body) => {
        if (error){
            callback("Unable to connect to forecast.io");
        } else if(response.statusCode === 400){
            callback("Unable to fetch weather.");
        } else if(response.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;


// this is updated code but does not seem to work...
// if(!error && response === 200){
//     console.log(`Temperature is : ${body.currently.temperature}`);
// } else {
//     console.log("Unable to fetch weather.");
// }