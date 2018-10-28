import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledComponentsCjs from 'styled-components';
import { TASK } from '../../constants';

const Status = styledComponentsCjs.span`
	width: 7px;
	height: 7px;
	border-radius: 50%;
	margin: 5px;
	background-color: ${({ status }) => TASK.status[status]};
`;
export default class StatusComponent extends Component {
	static propTypes = {
		status: PropTypes.number
	};

	static defaultProps = {
		status: 0
	}

	shouldComponentUpdate = ({ status }) => status !== this.props.status;

	render() {
		console.log(this.props.status,TASK.status, TASK.status[this.props.status]);
		return <Status status={this.props.status} />;
	}
}
