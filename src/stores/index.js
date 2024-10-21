import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
