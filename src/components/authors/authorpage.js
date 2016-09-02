"use strict";

var React = require('react');
var AuthorApi = require('../../api/author_api');
var AuthorList = require('./authorlist');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });
		}
	},

	render: function() {

		return (
			<div>
				<h1>Authors</h1>
				<AuthorList authors={this.state.authors}/>
			</div>
		);
	}
});

module.exports = Authors;