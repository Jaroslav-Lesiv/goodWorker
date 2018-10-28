import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AvailableTaskListItemContainer from '../../containers/availableTaskListItem';
import { TaskListWrapper } from '../../ui';
import { task } from '../../redux/actions';
import taskSelector from '../../redux/selectors/tasks';
import * as utils from '../../utils';

export class AvailableTaskList extends Component {
	static propTypes = {
		availableList: PropTypes.arrayOf(PropTypes.object),
		fetchAvailableList: PropTypes.func,
		keyword: PropTypes.string
	};

	static defaultProps = {
		availableList: []
	};

	componentDidMount = () => {
		utils.updateTitle('Available Task List');
		this.props.fetchAvailableList();
	};

	render() {
		return (
			<TaskListWrapper shadow>
				{this.props.availableList.filter(task => 
					utils.findString(task.label, this.props.keyword) ||
					utils.findString(task.description, this.props.keyword))
					.map(task => (
						<AvailableTaskListItemContainer
							modifications={{
								link: true,
								hover: true
							}}
							key={task.id}
							{...task}
						/>
					))}
			</TaskListWrapper>
		);
	}
}

const mapStateToProps = state => ({
	availableList: taskSelector.availableList(state),
	keyword: taskSelector.filterKeyword(state)
});

const mapDispatchToProps = {
	fetchAvailableList: task.availableList.request.pending
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AvailableTaskList)
);
