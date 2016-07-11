var React = require('react');
var ReactDOM = require('react-dom');

// components
var Greeter = require('./components/Greeter.js');

var name = "Codemzy";

ReactDOM.render(<Greeter name={name} message="This is a new message not the default!" />, document.getElementById('app'));