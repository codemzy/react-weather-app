var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    
    _onSearch(e) {
        e.preventDefault();
        var city = this.refs.city.value;
        if (city.length > 0) {
          this.refs.city.value = '';
          var encodedLocation = encodeURIComponent(city);
          window.location.hash = '#/?location=' + encodedLocation;
        }
    }
    
    render() {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text"><img src="/img/weatherweasellogo.png"></img>Weather Weasel</li>
                      <li>
                        <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
                      </li>
                      <li>
                        <Link to="/about" activeClassName="active">About</Link>
                      </li>
                      <li>
                        <Link to="/examples" activeClassName="active">Examples</Link>
                      </li>
                    </ul>
              </div>
              <div className="top-bar-right">
                <form onSubmit={this._onSearch.bind(this)}>
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="Enter city name" ref="city" />
                        </li>
                        <li>
                            <input type="submit" className="button hollow" value="Get Weather" />
                        </li>
                    </ul>
                </form>
              </div>
            </div>
        );
    }
}

module.exports = Nav;