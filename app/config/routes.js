// Router set up
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');
var Weather = require('../components/Weather');
var About = require('../components/About');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
            <Route path='/about' header='Player One' component={About} />
        </Route>
    </Router>
);

module.exports = routes;