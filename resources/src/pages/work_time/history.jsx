import React, { Component } from 'react';
import { Container, Block } from '../../ui';

export default class WorkHistory extends Component {
	render() {
		return (
			<Container shadow>
				<Block direction={'column'} padding={'5px 15px'}>
					<Block width={'100%'} justify={'space-between'} align={'center'}>
						<h5>Today (Wed UTC)</h5>
						<h5>This week (UTC)</h5>
					</Block>
					<Block width={'100%'} justify={'space-between'} align={'center'}>
						<h5>0:00 hrs</h5>
						<h5>0:00 of 28 hrs</h5>
					</Block>
				</Block>
			</Container>
		);
	}
}
