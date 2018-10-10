import React, { Component } from 'react';
import './App.css';
import { RootRouter } from './router';
import { Wrapper, Main, PageWrapper } from './ui';
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
	componentDidMount = () => {
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
					<PageWrapper>
						<RootRouter isLogin={isLogin} />
					</PageWrapper>
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
