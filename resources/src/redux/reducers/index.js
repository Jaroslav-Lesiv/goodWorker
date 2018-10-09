import { combineReducers } from 'redux';
import app from './app';
import messages from './messages';
import user from './user';
import task from './task';

export default combineReducers({
	app,
	messages,
	user,
	task
});
