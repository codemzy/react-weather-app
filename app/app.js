var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('./styles/styles.css');

// routes
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));