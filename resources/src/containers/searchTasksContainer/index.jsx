import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {task} from '../../redux/actions';
import Input from '../../components/input';
import taskSelector from '../../redux/selectors/tasks';

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
				defaultValue={this.props.keyword}
				{...this.props}
			/>
		);
	}
}


const mapDispatchToProps = {
	setFilterKeyword: task.setFilterKeyword
};

const mapStateToProps = state => ({
	keyword: taskSelector.filterKeyword(state)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchTasksContainer);
