var React = require('react');

class WeatherMessage extends React.Component {
    
    render() {
        return (
            <div>
                <p>This will show the weather in {this.props.city}.</p>
            </div>
        );
    }
    
}

module.exports = WeatherMessage;