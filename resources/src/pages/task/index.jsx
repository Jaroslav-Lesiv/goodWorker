import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../../ui';
import { PageSection } from '../../components/common/pageWrapper';
import AvailableTaskListItemContainer from '../../containers/availableTaskListItem';

export class TaskPage extends Component {
	static propTypes = {
		label: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.number,
		priority: PropTypes.number,
		status: PropTypes.number,
		total: PropTypes.number,
		created_at: PropTypes.string,
	};

	render() {
		const { label, description, id, priority, status, total, created_at } = this.props;
		return (
			<PageSection>
				<Container shadow>
					<AvailableTaskListItemContainer
						label={label}
						description={description}
						total={total}
						created_at={created_at}
						id={id}
						priority={priority}
						status={status}
						modifications={{
							link: false,
							hover: false
						}}
					/>
				</Container>
			</PageSection>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	id: task.selectedTask.id,
	status: task.selectedTask.status,
	priority: task.selectedTask.priority,
	label: task.selectedTask.label,
	description: task.selectedTask.description,
	created_at: task.selectedTask.created_at,
	total: task.selectedTask.total
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskPage);
