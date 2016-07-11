// Router set up
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');
var Weather = require('../components/Weather');
var About = require('../components/About');
var Examples = require('../components/Examples');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
            <Route path='/about' header='Player One' component={About} />
            <Route path='/examples' header='Player One' component={Examples} />
        </Route>
    </Router>
);

module.exports = routes;