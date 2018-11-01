import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PageSection } from '../../components/common/pageWrapper';
import AvailableTaskList from '../../containers/availableTaskList';
import DoneTaskList from '../../containers/doneTaskList';
import TaskListControl from './control';

export class HomePage extends Component {
	static propTypes = {
		availableList: PropTypes.arrayOf(PropTypes.object),
		doneList: PropTypes.arrayOf(PropTypes.object),
		activeList: PropTypes.string
	};

	static defaultProps = {
		availableList: [],
		doneList: []
	};

	render() {
		const { activeList } = this.props;
		return (
			<PageSection>
				<TaskListControl />

				{activeList === 'availableList' ? (
					<AvailableTaskList />
				) : activeList === 'doneList' ? (
					<DoneTaskList />
				) : null}
			</PageSection>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	availableList: task.availableList,
	doneList: task.doneList,
	activeList: task.activeList
});

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(HomePage)
);
