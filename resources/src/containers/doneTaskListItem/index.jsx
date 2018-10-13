import React from 'react';
import {
	TaskWrapper,
	TaskName,
	TaskDescription,
	TaskInfoBlock,
	TaskControlBlock,
	ClickedIcon,
	Block
} from '../../ui';
import { ArrowBack } from '@material-ui/icons';
import { Grow } from '@material-ui/core';
import * as utils from '../../utils';
import PropTypes from 'prop-types';
import { task } from '../../redux/actions';
import { connect } from 'react-redux';

class DoneTaskListItemContainer extends React.PureComponent {
	static propTypes = {
		label: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.number,
		backTask: PropTypes.func
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

	backTask = () => this.props.backTask(this.props.id)

	setHover = bool => this.setState({ isHovered: bool });

	render() {
		const { isHovered } = this.state;
		const { label, description, id } = this.props;
		return (
			<TaskWrapper
				onMouseEnter={() => this.setHover(true)}
				onMouseLeave={() => this.setHover(false)}
			>
				<TaskInfoBlock>
					<TaskName to={`task/${id}`}>
						{utils.overflowTaskLabel(label)}
					</TaskName>
					<TaskDescription>
						{utils.overflowTaskDescription(description)}
					</TaskDescription>
				</TaskInfoBlock>
				<TaskControlBlock>
					<Block direction={'row'} justify={'flex-end'}>
						<Grow in={isHovered}>
							<ClickedIcon
								onClick={this.backTask}
								size={17}
								circle
								margin={'0 0 0 3.5px'}
								active={true}
								icon={<ArrowBack />}
								status={'active'}
							/>
						</Grow>
					</Block>
				</TaskControlBlock>
			</TaskWrapper>
		);
	}
}

// const mapStateToProps = ({ task }) => ({
// 	currentTaskID: task.activeTask.id
// });

const mapDispatchToProps = {
	backTask: task.backTask
};

export default connect(
	null,
	mapDispatchToProps
)(DoneTaskListItemContainer);
