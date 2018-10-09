import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationItemUI, NavigationLink } from '../../../ui';
import { withRouter } from 'react-router';
import Tooltip from '@material-ui/core/Tooltip';

class NavigationItem extends Component {
	static propTypes = {
		to: PropTypes.string,
		icon: PropTypes.string,
		title: PropTypes.string
	};
	render() {
		const { to, icon, title } = this.props;
		return (
			<NavigationItemUI>
				<Tooltip title={title} placement="right">
					<NavigationLink to={to} exact>
						{icon}
					</NavigationLink>
				</Tooltip>
			</NavigationItemUI>
		);
	}
}
export default withRouter(NavigationItem);
