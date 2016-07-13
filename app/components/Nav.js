var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text">Weather Weasel</li>
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
                <ul className="menu">
                </ul>
              </div>
            </div>
        );
    }
}

module.exports = Nav;