import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo/logo-beta.svg';
import { Typography } from '@material-ui/core';
export class ApiPage extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Read the docs</h1>
				</header>
				<Typography variant="title" gutterBottom>
					Title
				</Typography>
				<Typography variant="subheading" gutterBottom>
					Subheading
				</Typography>
				<Typography variant="body2" gutterBottom>
					Body 2
				</Typography>
			</div>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ApiPage);
