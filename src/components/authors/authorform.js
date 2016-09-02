"use strict";

var React = require('react');
var Input = require('../common/textinput');

var AuthorForm = React.createClass({
	render: function() {
		return (
			<form>
				<Input 
					name="firstName"
					label="First Name"
					value={this.props.author.firstName}
					onChange={this.props.onChange}
					error={this.props.errors.firstName} />

				<Input 
					name="lastName"
					label="Last Name"
					value={this.props.author.lastName}
					onChange={this.props.onChange}
					error={this.props.errors.lastName} />

				<input 
					type="submit" 
					value="Save" 
					className="btn"
					onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = AuthorForm;