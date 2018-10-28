import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AvaibleTaskListItemContainer from '../../containers/avaibleTaskListItem';
import { TaskListWrapper } from '../../ui';
import { task } from '../../redux/actions';
import { findString } from '../../utils';
import taskSelector from '../../redux/selectors/tasks';

export class AvaibleTaskList extends Component {
	static propTypes = {
		avaibleList: PropTypes.arrayOf(PropTypes.object),
		fetchAvaibleList: PropTypes.func,
		keyword: PropTypes.string
	};

	static defaultProps = {
		avaibleList: []
	};

	componentDidMount = () => {
		this.props.fetchAvaibleList();
	};

	render() {
		return (
			<TaskListWrapper shadow>
				{this.props.avaibleList.filter(task => 
					findString(task.label, this.props.keyword) ||
					findString(task.description, this.props.keyword))
					.map(task => (
						<AvaibleTaskListItemContainer
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
	avaibleList: taskSelector.avaibleList(state),
	keyword: taskSelector.filterKeyword(state)
});

const mapDispatchToProps = {
	fetchAvaibleList: task.avaibleList.request.pending
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(AvaibleTaskList)
);
