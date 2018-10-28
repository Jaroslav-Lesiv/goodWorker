import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../ui';
export default class InputComponent extends Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		mod: PropTypes.shape({
			delay: PropTypes.bool
		}),
		value: PropTypes.string,
		defaultValue: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		value: '',
		defaultValue: '',
		style: {}
	};

	constructor() {
		super();
		this.timer = null;
		this.state = {
			value: ''
		};
	}

	handleChangeDelay = event => {
		this.setState({ value: event.target.value });
		if (this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(() => this.update(), 700);
	};

	handleChange = event => {
		this.setState({ value: event.target.value });
		this.update();
	};

	update = () => {
		this.props.onChange(this.state.value);
	};

	render() {
		return (
			<Input
				value={this.state.value}
				defaultValue={this.props.defaultValue}
				style={this.props.style}
				onChange={
					this.props.mod.delay ? this.handleChangeDelay : this.handleChange
				}
			/>
		);
	}
}
