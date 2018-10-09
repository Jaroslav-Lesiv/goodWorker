import React, { Component } from 'react';
import { Container, Textarea, Block } from '../../ui';

export default class Control extends Component {
	render() {
		return (
			<Container shadow>
				<Block direction={'column'}>
					<h6>Working on:</h6>
					<Textarea />
				</Block>
			</Container>
		);
	}
}
