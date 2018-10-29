import React from 'react';
import PropTypes from 'prop-types';
import { Container, Block, ContainerList, Text } from '../../ui';

export default class Subtask extends React.PureComponent {
	static propTypes = {
		subtask: PropTypes.arrayOf(PropTypes.string)
	};

	render() {
		return (
			<Container shadow>
				<Block direction={'column'}>
					<ContainerList>
						{this.props.subtask.map((task, idx) => (
							<li key={idx}>
								<Text>{task}</Text>
							</li>
						))}
					</ContainerList>
				</Block>
			</Container>
		);
	}
}
