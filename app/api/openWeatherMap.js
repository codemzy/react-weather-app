var axios = require('axios');

const OPEN_WEATHER_MAP_URL = '/api/weather';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}/${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res) {
            return res.data.main.temp;
        }, function(err) {
            throw new Error(err);
        });
    }
};