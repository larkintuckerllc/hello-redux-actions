import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromPhrase from '../ducks/phrase';

function App({ clearPhrase, phrase, setPhrase }) {
  return (
    <div>
      <div>{phrase !== null ? phrase : 'NO PHRASE'}</div>
      <button onClick={() => setPhrase('A sample phrase.')}>Set</button>
      <button onClick={() => clearPhrase()}>Clear</button>
    </div>
  );
}
App.propTypes = {
  clearPhrase: PropTypes.func.isRequired,
  phrase: PropTypes.string,
  setPhrase: PropTypes.func.isRequired,
};
App.defaultProps = {
  phrase: null,
};
export default connect(
  state => ({
    phrase: fromPhrase.getPhrase(state),
  }),
  {
    clearPhrase: fromPhrase.clearPhrase,
    setPhrase: fromPhrase.setPhrase,
  },
)(App);
