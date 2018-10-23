import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../ui';
export default class InputComponent extends Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		modification: PropTypes.shape({
			delay: PropTypes.bool
		}),
		value: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		value: '',
		style: {}
	};

	constructor() {
		super();
		this.timer = null;
	}

	handleChangeDelay = event => {
		if (this.timer) clearTimeout(this.timer);
		this.timer = setTimeout(() => this.props.onChange(event.target.value), 700);
	};

	handleChange = event => this.props.onChange(event.target.value);

	render() {
		return (
			<Input
				value={this.props.value}
				style={this.props.style}
				onChange={
					this.props.modification.delay
						? this.handleChangeDelay
						: this.handleChange
				}
			/>
		);
	}
}
