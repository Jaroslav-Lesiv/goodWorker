import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../ui';
export default class InputComponent extends Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		mod: PropTypes.shape({
			delay: PropTypes.bool
		}),
		defaultValue: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		defaultValue: '',
		style: {}
	};

	constructor() {
		super();
		this.timer = null;
	}

	handleChangeDelay = event => {
		if (this.timer) clearTimeout(this.timer);
		const value = event.target.value;
		this.timer = setTimeout(() => this.props.onChange(value), 700);
	};

	handleChange = event => {
		this.props.onChange(event.target.value);
	};

	render() {
		return (
			<Input
				defaultValue={this.props.defaultValue}
				style={this.props.style}
				onChange={
					this.props.mod.delay ? this.handleChangeDelay : this.handleChange
				}
			/>
		);
	}
}
