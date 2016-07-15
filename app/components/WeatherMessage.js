var React = require('react');

var WeatherMessage = ({temp, city, description}) => {
    return (
        <div>
            <h3 className="text-center">It is {temp}&#8451; in {city}.</h3>
            <h4 className="text-center">Weather: {description[0]}</h4>
            <h4 className="text-center">Wind: {description[1]}m/s</h4>
        </div>
    );
};

module.exports = WeatherMessage;