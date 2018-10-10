import React from 'react';
import {
	TaskWrapper,
	TaskName,
	TaskDescription,
	TaskinfoBlock,
	TaskControlBlock,
	ClickedIcon,
	Block
} from '../../ui';
import { Check, PlayArrow } from '@material-ui/icons';
import { Grow } from '@material-ui/core';
import * as utils from '../../utils';
import PropTypes from 'prop-types';
import { task } from '../../redux/actions';
import { connect } from 'react-redux';

class TaskItem extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.number,
		currentTaskID: PropTypes.number,
		onActivate: PropTypes.func,
		doneTask: PropTypes.func
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

	doneTask = () => this.props.doneTask(this.props.id);

	checkActiveTask = () => this.props.currentTaskID === this.props.id;

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
					<TaskName to={`task/${id}`}>
						{utils.overflowTaskLabel(label)}
					</TaskName>
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
								disabled={this.checkActiveTask()}
								circle
								margin={'0 0 0 3.5px'}
								active={true}
								icon={<PlayArrow />}
								status={'active'}
							/>
						</Grow>
						<Grow in={isHovered}>
							<ClickedIcon
								onClick={this.doneTask}
								size={17}
								circle
								margin={'0 0 0 3.5px'}
								active={true}
								icon={<Check />}
								status={'active'}
							/>
						</Grow>
					</Block>
				</TaskControlBlock>
			</TaskWrapper>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	currentTaskID: task.activeTask.id
});

const mapDispatchToProps = {
	doneTask: task.doneTask
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskItem);
