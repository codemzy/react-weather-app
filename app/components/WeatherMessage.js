var React = require('react');

class WeatherMessage extends React.Component {
    
    render() {
        return (
            <div>
                <p>It is {this.props.temp}&#8451; in {this.props.city}.</p>
            </div>
        );
    }
    
}

module.exports = WeatherMessage;