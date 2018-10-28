import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Check, PlayArrow, Stop } from '@material-ui/icons';
import { Grow } from '@material-ui/core';
import { connect } from 'react-redux';

import {
	TaskWrapper,
	TaskName,
	TaskDescription,
	TaskInfoBlock,
	TaskControlBlock,
	ClickedIcon,
	Block
} from '../../ui';
import * as utils from '../../utils';
import { task } from '../../redux/actions';
import PriorityComponent from '../../components/priority';
import StatusComponent from '../../components/status';
import Time from '../../components/time';

class AvaibleTaskListItemContainer extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		description: PropTypes.string,
		total: PropTypes.number,
		created_at: PropTypes.string,
		priority: PropTypes.number,
		status: PropTypes.number,
		id: PropTypes.number,
		currentTaskID: PropTypes.number,
		activateTask: PropTypes.func,
		stopTask: PropTypes.func,
		doneTask: PropTypes.func,
		history: PropTypes.object,
		selectTask: PropTypes.func,
		modifications: PropTypes.shape({
			link: PropTypes.bool,
			hover: PropTypes.bool
		})
	};

	static defaultProps = {
		label: '',
		description: '',
		total: 0,
		modifications: {
			link: true
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			isHovered: false
		};
	}

	componentDidMount = () => {
		utils.updateTitle('Available Task List');
	}

	doneTask = () => this.props.doneTask(this.props.id);

	activateTask = () => this.props.activateTask(this.props.id);

	stopTask = () => this.props.stopTask(this.props.id);

	checkActiveTask = () => this.props.currentTaskID === this.props.id;

	setHover = bool => this.setState({ isHovered: bool });

	onSelect = () => {
		const {
			label,
			description,
			id,
			priority,
			status,
			total,
			created_at
		} = this.props;
		this.props.selectTask({
			label,
			description,
			id,
			priority,
			status,
			total,
			created_at
		});
		this.props.history.push(`tasks/${id}/avaible`);
	};

	render() {
		const { isHovered } = this.state;
		const { label, description, priority, status, modifications } = this.props;
		const { link, hover } = modifications;
		const activeTask = this.checkActiveTask();
		const isShowControl = !hover || isHovered;
		
		return (
			<TaskWrapper
				onMouseEnter={hover ? () => this.setHover(true) : undefined}
				onMouseLeave={hover ? () => this.setHover(false) : undefined}
			>
				<Block direction={'column'}>
					<TaskInfoBlock>
						<TaskName onClick={link ? this.onSelect : undefined}>
							{utils.overflowTaskLabel(label)}
						</TaskName>
						<TaskDescription>
							{utils.overflowTaskDescription(description)}
						</TaskDescription>
					</TaskInfoBlock>
					<Block align={'center'}>
						<PriorityComponent priority={priority} />
						<StatusComponent status={status} />
					</Block>
				</Block>
				<Block>
					<TaskControlBlock>
						<Block direction={'row'} justify={'flex-end'}>
							<Grow in={isShowControl}>
								<ClickedIcon
									onClick={activeTask ? this.stopTask : this.activateTask}
									size={17}
									circle
									margin={'0 0 0 3.5px'}
									active={true}
									icon={activeTask ? <Stop /> : <PlayArrow />}
									status={'active'}
								/>
							</Grow>
							<Grow in={isShowControl}>
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
						<Block align={'flex-end'}>
							<Grow in={isShowControl}>
								<div>
									<Time time={this.props.total} />
								</div>
							</Grow>
						</Block>
					</TaskControlBlock>
				</Block>
			</TaskWrapper>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	currentTaskID: task.activeTask.id
});

const mapDispatchToProps = {
	doneTask: task.doneTask,
	activateTask: task.activateTask,
	stopTask: task.stopTask,
	selectTask: task.selectTask
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AvaibleTaskListItemContainer)
);
