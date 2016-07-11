var React = require('react');

// components
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');

class Weather extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            city: 'your city'
        };
    }
    
    _updateCity(city) {
        // set state with city passed up from the form
        this.setState({
          city: city
        });
    }
    
    render() {
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm updateCity={this._updateCity.bind(this)} />
                <WeatherMessage city={this.state.city} />
            </div>
        );
    }
    
}

module.exports = Weather;