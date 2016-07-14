var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('style!css!./styles/styles.css');

// routes
var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));