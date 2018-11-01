import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import * as utils from '../../utils';
import NotFound from '../../components/notFound';

export class NotFoundPage extends Component {
	static propTypes = {
		history: PropTypes.object
	};

	componentDidMount = () => {
		utils.updateTitle('Not found');
	};

	render() {
		return (
			<NotFound
				message={`Sorry, we couldn't find route ${
					this.props.history.location.pathname
				}`}
			/>
		);
	}
}

export default withRouter(NotFoundPage);
