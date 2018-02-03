
import { combineReducers } from 'redux';
import counter from '../ducks/counter';

const reducers = {
  counter,
};
export default combineReducers(reducers);
