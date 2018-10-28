import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import HomePage from './pages/home';
import StatisticPage from './pages/statistic';
import TaskListPage from './pages/tasks';
import TaskPage from './pages/task';
import UserPage from './pages/user';
import NotFoundPage from './pages/notFound';
import PropTypes from 'prop-types';

@withRouter
class AuthRouter extends PureComponent {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={LoginPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		);
	}
}

@withRouter
class UserRouter extends PureComponent {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/tasks" exact component={TaskListPage} />
				<Route path="/tasks/:id/available" component={TaskPage} />
				<Route path="/tasks/:id/done" component={TaskPage} />
				<Route path="/statistic" component={StatisticPage} />
				<Route path="/user" component={UserPage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		);
	}
}

const RootRouter = ({ isLogin }) => (isLogin ? <UserRouter /> : <AuthRouter />);
RootRouter.propTypes = {
	isLogin: PropTypes.bool
};
export { RootRouter };
