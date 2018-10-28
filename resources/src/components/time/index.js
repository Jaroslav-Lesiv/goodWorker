import React from 'react';
import PropTypes from 'prop-types';
import { formatSeconds } from '../../utils';
import { TimeUI } from '../../ui';

export default class Time extends React.PureComponent {
	static propTypes = {
		time: PropTypes.string
	};

	render() {
		return <TimeUI>{formatSeconds(this.props.time)}</TimeUI>;
	}
}
