import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

const middlewares = [
  promiseMiddleware,
];
export default () => createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ?
      window.devToolsExtension() : f => f,
  ),
);
