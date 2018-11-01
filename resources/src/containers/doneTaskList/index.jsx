import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DoneTaskListItemContainer from '../../containers/doneTaskListItem';
import { TaskListWrapper } from '../../ui';
import * as utils from '../../utils';
import { task } from '../../redux/actions';
import taskSelector from '../../redux/selectors/tasks';

export class DoneTaskList extends Component {
	static propTypes = {
		doneList: PropTypes.arrayOf(PropTypes.object),
		fetchDoneList: PropTypes.func,
		keyword: PropTypes.string
	};

	static defaultProps = {
		doneList: []
	};

	componentDidMount = () => {
		utils.updateTitle('Done Task List');
		this.props.fetchDoneList();
	};

	shouldComponentUpdate = props => {
		return (
			JSON.stringify(this.props.doneList) !==
			JSON.stringify(props.doneList)
		);
	};

	render() {
		return (
			<TaskListWrapper shadow>
				{this.props.doneList
					.filter(
						task =>
							utils.findString(task.label, this.props.keyword) ||
							utils.findString(
								task.description,
								this.props.keyword
							)
					)
					.map(task => (
						<DoneTaskListItemContainer key={task.id} {...task} />
					))}
			</TaskListWrapper>
		);
	}
}

const mapStateToProps = state => ({
	doneList: taskSelector.doneList(state),
	keyword: taskSelector.filterKeyword(state)
});

const mapDispatchToProps = {
	fetchDoneList: task.doneList.request.pending
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(DoneTaskList)
);
