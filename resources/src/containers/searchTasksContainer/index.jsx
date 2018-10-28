import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../../components/input';

export class SearchTasksContainer extends Component {
	static propTypes = {
		onChange: PropTypes
	};

	onChangeValue = value => console.info(value);

	render() {
		return (
			<Input
				mod={{ delay: true }}
				onChange={this.onChangeValue}
				{...this.props}
			/>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchTasksContainer);
