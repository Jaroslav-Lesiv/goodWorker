import React from 'react';
import PropTypes from 'prop-types';
import { formatSeconds } from '../../utils';
import { TimeUI } from '../../ui';

export default class Time extends React.Component {
	static propTypes = {
		time: PropTypes.number,
		active: PropTypes.bool
	};

	static defaultProps = {
		active: false
	};

	shouldComponentUpdate = props =>
		props.active !== this.props.active || props.time !== this.props.time;

	render() {
		return (
			<TimeUI active={this.props.active}>
				{formatSeconds(this.props.time)}
			</TimeUI>
		);
	}
}
