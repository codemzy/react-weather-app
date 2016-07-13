var React = require('react');

// components
var Nav = require('./Nav.js');

var MainComponent = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};


module.exports = MainComponent;