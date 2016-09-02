/* eslint-disable strict */
$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />

				<div className="fluid-container">
					<RouteHandler />
				</div>
			</div>
		);
	}
});

module.exports = App;