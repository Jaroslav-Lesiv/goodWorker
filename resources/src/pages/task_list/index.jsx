import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PageSection } from '../../components/common/pageWrapper';
import AvaibleTaskList from '../../containers/avaibleTaskList';
import DoneTaskList from '../../containers/doneTaskList';
import TaskListControl from './control';
// import TaskItem from './list_item';
// import { TaskListWrapper } from '../../ui';
import { task } from '../../redux/actions';

export class HomePage extends Component {
	static propTypes = {
		avaibleList: PropTypes.arrayOf(PropTypes.object),
		doneList: PropTypes.arrayOf(PropTypes.object),
		activeList: PropTypes.string
	};

	static defaultProps = {
		avaibleList: [],
		doneList: []
	};

	onSelect = id => this.setState({ active: id });

	// renderAvaibleList = () => (
	// 	<TaskListWrapper shadow>
	// 		{this.props.avaibleList.map(task => (
	// 			<TaskItem key={task.id} {...task} />
	// 		))}
	// 	</TaskListWrapper>
	// );

	// renderDoneList = () => (
	// 	<TaskListWrapper shadow>
	// 		{this.props.doneList.map(task => (
	// 			<TaskItem key={task.id} {...task} />
	// 		))}
	// 	</TaskListWrapper>
	// );

	render() {
		const { activeList } = this.props;
		return (
			<PageSection>
				<TaskListControl onSelect={this.onSelect} />

				{activeList === 'avaibleList'
					? <AvaibleTaskList />
					: activeList === 'doneList'
						? <DoneTaskList />
						: null}
			</PageSection>
		);
	}
}

const mapStateToProps = ({ task, user }) => ({
	user,
	avaibleList: task.avaibleList,
	doneList: task.doneList,
	activeList: task.activeList
});

const mapDispatchToProps = {
	onActivate: task.start
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HomePage)
);
