import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { translate } from 'multi-lang';
import { withRouter } from 'react-router';
import logo from '../../assets/images/logo/logo-beta.svg';
import { PageSection } from '../../components/common/pageWrapper';

export class HomePage extends Component {
	static propTypes = {
		user: PropTypes.object,
		t: PropTypes.func
	};

	render() {
		const { user, t } = this.props;
		const { username } = user;
		return (
			<PageSection>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">
							{t('short.hi_name', { name: username })}
						</h1>
						<h5>Welcome to {t('app.name')} desktop app</h5>
					</header>
					<h4 className="App-intro">{t('home.what_must_do')}</h4>
					<Typography>
						Tracking time as you work results in more accurate
						invoices than estimating time worked after the fact.
						Having a higher degree of accuracy creates trust for
						your clients, too, but it also benefits the business.
						When you know how you spend your time with high
						accuracy, you can analyze it and make smarter business
						decisions as a result. There are several excellent apps
						that can help you get started.
					</Typography>
				</div>
			</PageSection>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	user
});

const mapDispatchToProps = {};

export default translate(
	withRouter(
		connect(
			mapStateToProps,
			mapDispatchToProps
		)(HomePage)
	)
);
