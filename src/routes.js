"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="authors" handler={require('./components/authors/authorpage')} />
		<Route name="about" handler={require('./components/about/aboutpage')} />
		<NotFoundRoute handler={require('./components/notfound')} />
		<Redirect from="about-us" to="about" />
		<Redirect from="authurs" to="authors" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;