var React = require('react');
var ReactDOM = require('react-dom');

// components
var MainComponent = require('./components/MainComponent.js');

var name = "Codemzy";

ReactDOM.render(<MainComponent name={name} message="This is a React BoilerPlate" />, document.getElementById('app'));