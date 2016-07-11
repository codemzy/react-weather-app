var React = require('react');
var {Link} = require('react-router');

class Nav extends React.Component {
    
    render() {
        return (
            <div>
                <h1>This is the Nav</h1>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
    
}

module.exports = Nav;