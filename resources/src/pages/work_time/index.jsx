import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PageSection } from '../../components/common/pageWrapper';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { Container, ClickedIcon, Block } from '../../ui';
import WorkHistory from './history';
import Control from './control';
export class HomePage extends Component {
	static propTypes = {
		description: PropTypes.string,
		active: PropTypes.string
	};

	static defaultProps = {
		description: ''
	};

	onStart = () => {
		console.log('started');
	};

	handleChange = name => event => this.setState({ [name]: event });

	render() {
		const { active } = this.props;

		return (
			<PageSection>
				<Container shadow>
					<Block
						direction={'row'}
						align={'center'}
						padding={'5px 15px'}
						justify={'space-between'}
					>
						<Block direction={'column'}>
							<h6>Current Session</h6>
							<h4>0 hrs 00 m</h4>
						</Block>
						<ClickedIcon
							onClick={this.onStart}
							size={20}
							padding={'12.5px'}
							margin={'1px'}
							active={active === 'main'}
							icon={active ? <Pause /> : <PlayArrow />}
							status={'active'}
						/>
					</Block>
					{/* <Input
						value={description}
						style={{
							flexGrow: 1,
							minHeight: '50vh'
						}}
						onChange={this.handleChange('search')}
					/> */}
				</Container>
				<WorkHistory />
				<Control />
			</PageSection>
		);
	}
}

const mapStateToProps = ({ task, user }) => ({
	user,
	task_list: task.task_list,
	done_list: task.done_list
});

const mapDispatchToProps = {};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HomePage)
);
