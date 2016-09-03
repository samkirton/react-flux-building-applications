"use strict";

var Dispatcher = require('../dispatcher/appdispatcher');
var AuthorApi = require('../api/author_api');
var ActionTypes = require('../constants/actiontypes');

var AuthorActions = {
	createAuthor: function(author) {
		// handle the response from an api
		var newAuthor = AuthorApi.saveAuthor(author);

		// tell the stores that an author was just created
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	}
};

module.exports = AuthorActions;