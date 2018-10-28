import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PageSection } from '../../components/common/pageWrapper';
import AvaibleTaskList from '../../containers/avaibleTaskList';
import DoneTaskList from '../../containers/doneTaskList';
import TaskListControl from './control';

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

	render() {
		const { activeList } = this.props;
		return (
			<PageSection>
				<TaskListControl />

				{activeList === 'avaibleList'
					? <AvaibleTaskList />
					: activeList === 'doneList'
						? <DoneTaskList />
						: null}
			</PageSection>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	avaibleList: task.avaibleList,
	doneList: task.doneList,
	activeList: task.activeList
});

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(HomePage)
);
