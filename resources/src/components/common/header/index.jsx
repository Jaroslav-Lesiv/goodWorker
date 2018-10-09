import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RootHeaderRouter } from './header';
import { withRouter } from 'react-router';
import { HeaderUI } from '../../../ui';

const mapStateToProps = ({ user }) => ({
	isLogin: user.isLogin
});

export class Header extends React.Component {
	static propTypes = {
		isLogin: PropTypes.bool
	};

	render() {
		const { isLogin } = this.props;
		return (
			<HeaderUI>
				<RootHeaderRouter isLogin={isLogin} />
			</HeaderUI>
		);
	}
}

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(Header)
);
