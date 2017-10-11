const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=63%2060%20102nd%20Street%20Rego%20Park%20New%20York',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});