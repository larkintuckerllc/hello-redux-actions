
import { combineReducers } from 'redux';
import counter from '../ducks/counter';
import phrase from '../ducks/phrase';

const reducers = {
  counter,
  phrase,
};
export default combineReducers(reducers);
