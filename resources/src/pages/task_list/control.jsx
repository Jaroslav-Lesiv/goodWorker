import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Input, ClickedIcon, Container } from '../../ui';
import {
	ViewList,
	PlaylistAddCheck
} from '@material-ui/icons';

const ControlWrapper = styled(Container)`
	& > :first-child {
		/* padding-left: 0; */
		margin-left: 0;
	}
	& > :last-child {
		/* padding-right: 0; */
		margin-right: 0;
	}
`;
const ToogledButtonWrapper = styled.div`
	display: flex;
`;

export class TaskListControl extends Component {
	static propTypes = {
		onSelect: PropTypes.func,
		active: PropTypes.string
	};

	state = {
		search: '',
		active: 0,
		filters: []
	};

	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	setActive = id => this.setState({ active: id });

	render() {
		const { search } = this.state;
		const { onSelect, active } = this.props;
		return (
			<ControlWrapper>
				<Input
					value={search}
					style={{
						flexGrow: 1,
						marginRight: 7.5
					}}
					onChange={this.handleChange('search')}
				/>

				<ToogledButtonWrapper>
					<ClickedIcon
						size={20}
						// disabled
						padding={'12.5px'}
						margin={'1px'}
						onClick={() => onSelect('task_list')}
						icon={<ViewList />}
						active={active === 'task_list'}
					/>
					<ClickedIcon
						size={20}
						// disabled
						padding={'12.5px'}
						margin={'1px'}
						onClick={() => onSelect('done_list')}
						icon={<PlaylistAddCheck />}
						active={active === 'done_list'}
					/>
				</ToogledButtonWrapper>
			</ControlWrapper>
		);
	}
}

export default withRouter(TaskListControl);
