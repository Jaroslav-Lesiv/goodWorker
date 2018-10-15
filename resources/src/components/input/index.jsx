import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class componentName extends Component {
	static propTypes = {
		onType: PropTypes.func
	};
	constructor() {
		super();
		this.timer = null;
	}
	handleChange = event => {
		if (this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(() => this.props.onType(event.target.value), 700);
	};

	render() {
		return <div />;
	}
}
