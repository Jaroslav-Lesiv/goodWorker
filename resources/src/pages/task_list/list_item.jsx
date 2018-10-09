import React, { Component } from 'react';
import {
	TaskWrapper,
	TaskName,
	TaskDescription,
	TaskinfoBlock,
	TaskControlBlock,
	ClickedIcon,
	Block
} from '../../ui';
import { Check, DeleteForever, PlayArrow } from '@material-ui/icons';
import { Grow } from '@material-ui/core';
import * as utils from '../../utils';
import PropTypes from 'prop-types';

export default class TaskItem extends Component {
	static propTypes = {
		label: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.number,
		onActivate: PropTypes.func
	};

	static defaultProps = {
		label: '',
		description: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			isHovered: false
		};
	}

	onActivate = () => this.props.onActivate(this.props.id);

	setHover = bool => this.setState({ isHovered: bool });

	render() {
		const { isHovered } = this.state;
		const { label, description, id } = this.props;
		return (
			<TaskWrapper
				onMouseEnter={() => this.setHover(true)}
				onMouseLeave={() => this.setHover(false)}
			>
				<TaskinfoBlock>
					<TaskName to={`task/${id}`}>{utils.overflowTaskLabel(label)}</TaskName>
					<TaskDescription>
						{utils.overflowTaskDescription(description)}
					</TaskDescription>
				</TaskinfoBlock>
				<TaskControlBlock>
					<Block direction={'row'} justify={'flex-end'}>
						<Grow in={isHovered}>
							<ClickedIcon
								onClick={this.setActiveTask}
								size={17}
								circle
								margin={'0 0 0 3.5px'}
								active={true}
								icon={<PlayArrow />}
								status={'active'}
							/>
						</Grow>
						<Grow in={isHovered}>
							<ClickedIcon
								onClick={() => this.setActive(0)}
								size={17}
								circle
								margin={'0 0 0 3.5px'}
								active={true}
								icon={<Check />}
								status={'active'}
							/>
						</Grow>
						<Grow in={isHovered}>
							<ClickedIcon
								onClick={() => this.setActive(0)}
								size={17}
								margin={'0 0 0 3.5px'}
								circle
								active={false}
								icon={<DeleteForever />}
							/>
						</Grow>
					</Block>
				</TaskControlBlock>
			</TaskWrapper>
		);
	}
}
