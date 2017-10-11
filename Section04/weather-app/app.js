const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/' +
    'json?address=63%2060%20102nd%20Street%20Rego%20Park%20New%20York',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});