import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {task} from '../../redux/actions';
import Input from '../../components/input';

export class SearchTasksContainer extends Component {
	static propTypes = {
		setFilterKeyword: PropTypes.func
	};

	onChangeValue = value => this.props.setFilterKeyword(value);

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


const mapDispatchToProps = {
	setFilterKeyword: task.setFilterKeyword
};

export default connect(
	null,
	mapDispatchToProps
)(SearchTasksContainer);
