import React, { Component } from 'react';
import './App.css';
import { RootRouter } from './router';
import { Wrapper, Main } from './ui';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './components/common/navigation';
import Header from './components/common/header';
import { app } from './redux/actions';
import PropTypes from 'prop-types';
import GlobalStyle from './ui/global';
import 'typeface-roboto';

class App extends Component {
	static propTypes = {
		start: PropTypes.func,
		isLogin: PropTypes.bool
	};
	componentWillMount = () => {
		this.props.start();
	};
	render() {
		const { isLogin } = this.props;
		return (
			<Wrapper>
				<CssBaseline />
				<GlobalStyle />
				<Navigation isLogin={isLogin} />
				<Main>
					<Header />
					<RootRouter isLogin={isLogin} />
				</Main>
			</Wrapper>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	isLogin: user.isLogin
});

const mapDispatchToProps = {
	start: app.start
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
