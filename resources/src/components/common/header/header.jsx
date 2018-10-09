import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Block, HeaderTitle } from '../../../ui';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
const HeaderRouter = () => (
	<Switch>
		<Route path="/" exact component={AuthHeader} />
	</Switch>
);

const UserHeaderRouter = () => (
	<Switch>
		<Route path="/" exact component={HomeHeader} />
		<Route path="/work_time" component={WorkHeader} />
		<Route path="/task_list" exact component={TaskListHeader} />
		<Route path="/statistic" exact component={StatisticHeader} />
		<Route path="/task/:id" exact component={TaskHeader} />
		<Route path="/user" exact component={UserHeader} />
	</Switch>
);

const AuthHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>Auth</HeaderTitle>
		</Block>
	</Slide>
);

const HomeHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>Home</HeaderTitle>
		</Block>
	</Slide>
);
const TaskListHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>Task List</HeaderTitle>
		</Block>
	</Slide>
);
const StatisticHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>Statistic</HeaderTitle>
		</Block>
	</Slide>
);
const UserHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>User</HeaderTitle>
		</Block>
	</Slide>
);

const WorkHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>Work tracker</HeaderTitle>
		</Block>
	</Slide>
);
const TaskHeader = () => (
	<Slide direction="right" in={true} mountOnEnter unmountOnExit>
		<Block>
			<HeaderTitle>Task</HeaderTitle>
		</Block>
	</Slide>
);

const RootHeaderRouter = ({ isLogin }) =>
	isLogin ? <UserHeaderRouter /> : <HeaderRouter />;

RootHeaderRouter.propTypes = {
	isLogin: PropTypes.bool
};

export { RootHeaderRouter };
