var React = require('react');

// components
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');
var ErrorModal = require('./ErrorModal');

class Weather extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: false,
            errorModalMessage: false
        };
    }
    
    _handleSearch(city) {
        this.setState({
            isLoading: true,
            errorMessage: false,
            errorModalMessage: false,
            location: false,
            temp: false
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
    
    _handleBlankSearch() {
        this.setState({
            isLoading: false,
            errorMessage: false,
            errorModalMessage: "You need to enter a city or location."
        });
    }
    
    // if page is located with location as params
    componentDidMount() {
        var location = this.props.location.query.location;
        if (location && location.length > 0) {
            this._handleSearch(location);
            // now clear location in params
            window.location.hash = '#/';
        }
    }
    
    // if nav search is peformed on getweather page
    componentWillReceiveProps(newProps) {
        var location = newProps.location.query.location;
        if (location && location.length > 0) {
            this._handleSearch(location);
            // now clear location in params
            window.location.hash = '#/';
        }
    }
    
    render() {
        var renderMessage = function() {
            if (this.state.isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (this.state.errorMessage) {
                return <p>Could not find location.</p>;
            } else if (this.state.temp) {
                return <WeatherMessage city={this.state.city} temp={this.state.temp} />;
            }
        }.bind(this);
        // bind with arrow function
        var renderModal = () => {
            if (this.state.errorModalMessage) {
                return (
                    <ErrorModal message={this.state.errorModalMessage} />
                );
            }
        };
        return (
            <div>
                <img src="/img/weatherweasel.png" className="float-center"></img>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this._handleSearch.bind(this)} onBlankSearch={this._handleBlankSearch.bind(this)} />
                {renderMessage()}
                {renderModal()}
            </div>
        );
    }
    
}

module.exports = Weather;