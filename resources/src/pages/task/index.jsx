import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../../ui';
import { PageSection } from '../../components/common/pageWrapper';
import AvaibleTaskListItemContainer from '../../containers/avaibleTaskListItem';

export class TaskPage extends Component {
	static propTypes = {
		label: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.number,
		priority: PropTypes.number,
		status: PropTypes.number
	};

	render() {
		const { label, description, id, priority, status } = this.props;
		return (
			<PageSection>
				<Container shadow>
					<AvaibleTaskListItemContainer
						label={label}
						description={description}
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
	description: task.selectedTask.description
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskPage);
