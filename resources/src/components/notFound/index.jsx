import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper, Image, Label } from '../../ui';
import RobotImage from '../../assets/images/searching.svg';

export default class NotFound extends Component {
	static propTypes = {
		label: PropTypes.strings,
		message: PropTypes.string
	};

	static defaultProps = {
		label: 'Oops',
		message: 'Sorry, we couldn`t find it',
	};

	render() {
		return (
			<PageWrapper style={{ padding: '100px 30px', alignItems: 'center', flexDirection: 'column' }}>
				<Image src={RobotImage} size={100} />
				<Label>{this.props.label}</Label>
				<Label>{this.props.message}</Label>
			</PageWrapper>
		);
	}
}
