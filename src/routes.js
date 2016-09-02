"use strict"

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={require('./componets/app')}>
		<DefaultRoute handler={require('./componets/homePage')} />
		<Route name="authors" handler={require('./components/authors/authorpage')} />
		<Route name="about" handler={require('./components/about/aboutpage')} />
	</Route>
);

module.exports = routes;