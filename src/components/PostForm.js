import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createPost } from '../actions/postAction';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const { title, body } = this.state;
		const post = { title, body};

		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Title: </label><br />
						<input type='text' name='title' onChange={this.handleChange.bind(this)} value={this.state.title} />
					</div>
					<div>
						<label>Body: </label><br />
						<textarea name='body' onChange={this.handleChange.bind(this)} value={this.state.body} />
					</div>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

PostForm.propTypes = {
	createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);