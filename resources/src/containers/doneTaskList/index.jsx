import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DoneTaskListItemContainer from '../../containers/doneTaskListItem';
import { TaskListWrapper } from '../../ui';
import { task } from '../../redux/actions';


export class DoneTaskList extends Component {
	static propTypes = {
		doneList: PropTypes.arrayOf(PropTypes.object),
		fetchDoneList: PropTypes.func
	};

	static defaultProps = {
		doneList: []
	};

	componentDidMount = () => {
		this.props.fetchDoneList();
	};

	render() {
		return (
			<TaskListWrapper shadow>
				{this.props.doneList.map(task => (
					<DoneTaskListItemContainer key={task.id} {...task} />
				))}
			</TaskListWrapper>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	doneList: task.doneList
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
