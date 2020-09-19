import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addWords } from '../redux/words/actions';
import Input from './Input';

function App({ words, addWords }) {
  return (
    <div>
      <Input />
      <button onClick={() => addWords([])}>Add</button>
      <div>
        {JSON.stringify(words)}
      </div>
    </div>
  );
}

App.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
  addWords: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  words: state.words.all,
});

const mapDispatch = {
  addWords,
};

export default connect(mapState, mapDispatch)(App);
