import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { PageSection } from '../../../components/common/pageWrapper';
import { Container } from '../../../ui';
import { Typography } from '@material-ui/core';

export class WorkspaceType extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<PageSection>
				<Container shadow>
					<Typography variant="headline">Start with a workspace</Typography>
				</Container>
			</PageSection>
		);
	}
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(componentName);
