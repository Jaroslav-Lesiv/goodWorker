import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import redux from '../../redux.svg';
import electron from '../../electron.svg';
import { withRouter } from 'react-router';
import { PageSection } from '../../components/common/pageWrapper';

export class HomePage extends Component {
	static propTypes = {
		user: PropTypes.object
	};

	render() {
		const { user } = this.props;
		const { username } = user;
		return (
			<PageSection>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<img src={redux} className="App-logo" alt="logo" />
						<img src={electron} className="App-logo" alt="logo" />
						<h1 className="App-title">Hi {username}</h1>
						<h1 className="App-title">Welcome to Electron React Redux App</h1>
					</header>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save.
					</p>
					<p>created by Jaroslav Lesiv</p>
					<p>v 0.0.1</p>
				</div>
			</PageSection>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	user
});

const mapDispatchToProps = {};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(HomePage)
);
