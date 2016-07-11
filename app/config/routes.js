// Router set up
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');


// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>

        </Route>
    </Router>
);

module.exports = routes;