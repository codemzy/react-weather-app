'use strict';

require('dotenv').config();
const APIKEY = process.env.WEATHER_KEY;

// openweather-apis set up
var weather = require('openweather-apis');
weather.setUnits('metric');
weather.setAPPID(APIKEY);

module.exports = function (app) {
    
    // weather api route
    app.route('/api/weather/:location')
        .get(function(req, res) {
            let location = req.params.location;
            weather.setCity(location);
        	weather.getAllWeather(function(err, result){
        	    if (err) {
        	        console.log(err);
        	    } else {
        	        res.json(result);
        	    }
        	});
        });
    
};
