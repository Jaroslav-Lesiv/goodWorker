import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AvaibleTaskListItemContainer from '../../containers/avaibleTaskListItem';
import { TaskListWrapper } from '../../ui';
import { task } from '../../redux/actions';

export class AvaibleTaskList extends Component {
	static propTypes = {
		avaibleList: PropTypes.arrayOf(PropTypes.object),
		fetchAvaibleList: PropTypes.func
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
				{this.props.avaibleList.map(task => (
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

const mapStateToProps = ({ task }) => ({
	avaibleList: task.avaibleList
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
