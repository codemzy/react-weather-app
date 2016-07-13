var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <div>
            <p>It is {temp}&#8451; in {city}.</p>
        </div>
    );
};

module.exports = WeatherMessage;