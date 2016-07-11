var React = require('react');

class WeatherForm extends React.Component {
    
    _onFormSubmit(e) {
        e.preventDefault();
        var city = this.refs.city.value;
        if (city.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(city);
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <div><input type="text" placeholder="Enter city name" ref="city" /></div>
                    <div><button>Get Weather</button></div>
                </form>
            </div>
        );
    }
    
}

module.exports = WeatherForm;