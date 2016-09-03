"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorStore = require('../../stores/authorstore');
var AuthorActions = require('../../actions/authoractions');
var AuthorList = require('./authorlist');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStore.getAllAuthors() 
		};
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