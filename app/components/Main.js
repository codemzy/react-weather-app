var React = require('react');

// components
var Nav = require('./Nav.js');

class MainComponent extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
    
}


module.exports = MainComponent;