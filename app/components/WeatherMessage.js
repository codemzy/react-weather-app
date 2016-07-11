var React = require('react');

class WeatherMessage extends React.Component {
    
    render() {
        if (this.props.city.length > 0) {
            var message = 'This will show the weather in ' + this.props.city; 
        }
        return (
            <div>
                <p>{message}</p>
            </div>
        );
    }
    
}

module.exports = WeatherMessage;