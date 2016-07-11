// Router set up
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');
var Weather = require('../components/Weather');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
        </Route>
    </Router>
);

module.exports = routes;