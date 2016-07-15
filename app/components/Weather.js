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
            temp: false,
            description: false
        });
        openWeatherMap.getTemp(city).then(function(data) {
            this.setState({
                city: city,
                temp: data.main.temp,
                iconCode: data.weather[0].id,
                description: [data.weather[0].main, data.wind.speed],
                isLoading: false,
                errorMessage: false
            });
        }.bind(this), function(error) {
            this.setState({
                isLoading: false,
                errorMessage: true,
                location: false,
                temp: false,
                description: false
            });
        }.bind(this));
    }
    
    _handleBlankSearch() {
        this.setState({
            isLoading: false,
            errorMessage: false,
            errorModalMessage: "You need to enter a city or location.",
            location: false,
            temp: false,
            description: false
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
                return <WeatherMessage city={this.state.city} temp={this.state.temp} description={this.state.description} />;
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
        // bind with arrow function
        var renderIcon = () => {
            var icon = '';
            if (this.state.isLoading) {
                icon = "fa fa-5x fa-refresh fa-spin";
                return <h1 className="text-center"><i className={icon}></i></h1>;
            } else if (this.state.temp) {
                // select the right icon for the id
                if (this.state.iconCode === 802 || this.state.iconCode === 803 || this.state.iconCode === 804) {
                    icon = "fa fa-5x fa-cloud";
                } else if (this.state.iconCode === 800 || this.state.iconCode === 801 || this.state.iconCode === 950 || this.state.iconCode === 951 || this.state.iconCode === 952 || this.state.iconCode === 953 || this.state.iconCode === 904) {
                    icon = "fa fa-5x fa-sun-o";
                } else if (this.state.iconCode === 300 || this.state.iconCode === 301 || this.state.iconCode === 302 || this.state.iconCode === 310 || this.state.iconCode === 311 || this.state.iconCode === 312 || this.state.iconCode === 313 || this.state.iconCode === 314 || this.state.iconCode === 321) {
                    icon = "fa fa-5x fa-umbrella";
                } else if (this.state.iconCode === 500 || this.state.iconCode === 501 || this.state.iconCode === 502 || this.state.iconCode === 503 || this.state.iconCode === 504 || this.state.iconCode === 511 || this.state.iconCode === 520 || this.state.iconCode === 521 || this.state.iconCode === 522 || this.state.iconCode === 531) {
                    icon = "fa fa-5x fa-tint";
                } else if (this.state.iconCode === 200 || this.state.iconCode === 201 || this.state.iconCode === 202 || this.state.iconCode === 210 || this.state.iconCode === 211 || this.state.iconCode === 212 || this.state.iconCode === 221 || this.state.iconCode === 230 || this.state.iconCode === 231 || this.state.iconCode === 232 || this.state.iconCode === 960 || this.state.iconCode === 961 || this.state.iconCode === 962 || this.state.iconCode === 900 || this.state.iconCode === 901 || this.state.iconCode === 902) {
                    icon = "fa fa-5x fa-bolt";
                } else if (this.state.iconCode === 600 || this.state.iconCode === 601 || this.state.iconCode === 602 || this.state.iconCode === 611 || this.state.iconCode === 612 || this.state.iconCode === 615 || this.state.iconCode === 620 || this.state.iconCode === 621 || this.state.iconCode === 622 || this.state.iconCode === 903 || this.state.iconCode === 906) {
                    icon = "fa fa-5x fa-asterisk";
                } else if (this.state.iconCode === 954 || this.state.iconCode === 955 || this.state.iconCode === 956 || this.state.iconCode === 957 || this.state.iconCode === 958 || this.state.iconCode === 959  || this.state.iconCode === 905) {
                    icon = "fa fa-5x fa-flag";
                } else if (this.state.iconCode === 701 || this.state.iconCode === 711 || this.state.iconCode === 721 || this.state.iconCode === 731 || this.state.iconCode === 741 || this.state.iconCode === 751 || this.state.iconCode === 761 || this.state.iconCode === 762 || this.state.iconCode === 771 || this.state.iconCode === 781) {
                    icon = "fa fa-5x fa-spinner";
                } else {
                    icon = "fa fa-5x fa-globe";
                }
                return <h1 className="text-center"><i className={icon}></i></h1>;
            } else {
                return <img src="/img/weatherweasel.png" className="float-center"></img>;
            }
        };
        return (
            <div>
                {renderIcon()}
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this._handleSearch.bind(this)} onBlankSearch={this._handleBlankSearch.bind(this)} />
                {renderMessage()}
                {renderModal()}
            </div>
        );
    }
    
}

module.exports = Weather;