import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import initialState from './initialState';
import rootSaga from '../../sagas';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	initialState,
	applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
