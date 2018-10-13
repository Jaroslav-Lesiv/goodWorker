import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Block } from '../../ui';
import { Flag, FlagOutlined } from '@material-ui/icons';

let priorType = [1, 2, 3, 4, 5];
export default class PriorityComponent extends Component {
	static propTypes = {
		priority: PropTypes.number,
		size: PropTypes.string
	};

	shouldComponentUpdate = ({ priority }) => priority !== this.props.priority;

	render() {
		const { priority, size } = this.props;
		return (
			<Block>
				{priorType.map(
					(type, idx) =>
						type <= priority ? (
							<Flag key={idx} fontSize={size || 'small'} />
						) : (
							<FlagOutlined key={idx} fontSize={size || 'small'} />
						)
				)}
			</Block>
		);
	}
}
