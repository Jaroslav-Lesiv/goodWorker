import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import logo from '../../assets/images/logo/logo-beta.svg';
import { withRouter } from 'react-router';
// import { PageSection } from '../../components/common/pageWrapper';
import NotFound from '../../components/notFound';
import * as utils from '../../utils';

export class HomePage extends Component {
	static propTypes = {
		user: PropTypes.object
	};

	componentDidMount = () => {
		utils.updateTitle('Statistic');
	}

	render() {
		return (
			<NotFound />
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
