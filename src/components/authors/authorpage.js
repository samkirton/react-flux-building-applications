"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorApi = require('../../api/author_api');
var AuthorList = require('./authorlist');

var AuthorPage = React.createClass({
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
				<Link to="addAuthor" className="btn">Create author</Link>
				<AuthorList authors={this.state.authors}/>
			</div>
		);
	}
});

module.exports = AuthorPage;