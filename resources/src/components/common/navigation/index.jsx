import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	NavigationWrapper,
	NavigationList,
	NavigationLogo,
	Logo
} from '../../../ui';
import { Home, ListAlt, PieChart, Timer } from '@material-ui/icons';
import NavigationItem from './item';
import { withRouter } from 'react-router';

class Navigation extends Component {
	static propTypes = {
		isLogin: PropTypes.bool
	};

	render() {
		const { isLogin } = this.props;
		// if (exude.includes(location.pathname)) return null

		return (
			<NavigationWrapper>
				<NavigationLogo>
					<Logo />
				</NavigationLogo>

				{isLogin ? (
					<NavigationList>
						<NavigationItem to={'/'} title={'HOME'} icon={<Home />} />
						<NavigationItem
							to={'/work_time'}
							title={'WORK TIME'}
							icon={<Timer />}
						/>
						<NavigationItem
							to={'/taskList'}
							title={'TASK LIST'}
							icon={<ListAlt />}
						/>
						<NavigationItem
							to={'/statistic'}
							title={'STATISTIC'}
							icon={<PieChart />}
						/>
					</NavigationList>
				) : null}
			</NavigationWrapper>
		);
	}
}
export default withRouter(Navigation);
