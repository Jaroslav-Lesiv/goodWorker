import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '@material-ui/icons/Home';
import ListAlt from '@material-ui/icons/ListAlt';
import PieChart from '@material-ui/icons/PieChart';
import Timer from '@material-ui/icons/Timer';
import NavigationItem from './item';
import { withRouter } from 'react-router';
import { translate } from 'multi-lang';
import {
	NavigationWrapper,
	NavigationList,
	NavigationLogo,
	Logo
} from '../../../ui';

class Navigation extends Component {
	static propTypes = {
		isLogin: PropTypes.bool,
		t: PropTypes.func
	};

	render() {
		const { isLogin, t } = this.props;

		return (
			<NavigationWrapper>
				<NavigationLogo>
					<Logo />
				</NavigationLogo>

				{isLogin ? (
					<NavigationList>
						<NavigationItem
							to={'/'}
							title={t('nav.home')}
							icon={<Home />}
						/>
						<NavigationItem
							to={'/last'}
							title={t('nav.last')}
							icon={<Timer />}
						/>
						<NavigationItem
							to={'/tasks'}
							title={t('nav.tasks')}
							icon={<ListAlt />}
						/>
						<NavigationItem
							to={'/statistic'}
							title={t('nav.statistic')}
							icon={<PieChart />}
						/>
					</NavigationList>
				) : null}
			</NavigationWrapper>
		);
	}
}
export default translate(withRouter(Navigation));
