import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromCounter from '../ducks/counter';

function App({ counter, decrementCounter, incrementCounter }) {
  return (
    <div>
      <div>{counter.toString()}</div>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}
App.propTypes = {
  counter: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    counter: fromCounter.getCounter(state),
  }),
  {
    decrementCounter: fromCounter.decrementCounter,
    incrementCounter: fromCounter.incrementCounter,
  },
)(App);
