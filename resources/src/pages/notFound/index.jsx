import React, { Component } from 'react';
import { PageSection } from '../../components/common/pageWrapper';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
export class NotFoundPage extends Component {
	static propTypes = {
		history: PropTypes.object
	};
	render() {
		return (
			<PageSection>
				<div className="App">
					<h1>Not found route - ${this.props.history.location.pathname}</h1>
				</div>
			</PageSection>
		);
	}
}

export default withRouter(NotFoundPage);
