var React = require('react');

// components
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

class Weather extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: false
        };
    }
    
    _handleSearch(city) {
        this.setState({
            isLoading: true,
            errorMessage: false
        });
        openWeatherMap.getTemp(city).then(function(temp) {
            this.setState({
                city: city,
                temp: temp,
                isLoading: false,
                errorMessage: false
            });
        }.bind(this), function(error) {
            this.setState({
                isLoading: false,
                errorMessage: true
            });
        }.bind(this));
    }
    
    render() {
        var renderMessage = function() {
            if (this.state.isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (this.state.errorMessage) {
                return <p>Could not find location.</p>;
            } else if (this.state.temp) {
                return <WeatherMessage city={this.state.city} temp={this.state.temp} />;
            }
        }.bind(this);
        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this._handleSearch.bind(this)} />
                {renderMessage()}
                {this.state.errorMessage}
            </div>
        );
    }
    
}

module.exports = Weather;