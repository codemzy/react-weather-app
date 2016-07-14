var React = require('react');

class WeatherForm extends React.Component {
    
    _onFormSubmit(e) {
        e.preventDefault();
        var city = this.refs.city.value;
        if (city.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(city);
        } else {
            this.props.onBlankSearch();
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <input type="search" placeholder="Enter city name" ref="city" />
                    <button className="primary hollow expanded button">Get Weather</button>
                </form>
            </div>
        );
    }
    
}

module.exports = WeatherForm;