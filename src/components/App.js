import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/App.module.css';
import { saveData } from '../utilities/file';
import { setAdding } from '../redux/words/actions';
import Input from './Input';

function App({
  words,
  adding,
  setAdding,
}) {
  function buildWords() {
    return words.map((item) => (
      <div
        key={`${item.level}-${item.word}`}
        className={styles.word}>
        {item.word}
      </div>
    ));
  }

  return (
    <main className={styles.main}>
      <Input />
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => setAdding(!adding)}
        >
          Add
        </button>
        <button
          className={styles.button}
          onClick={() => saveData('words.json', words)}
        >
          Save
        </button>
      </div>
      <div className={styles.words}>
        {buildWords()}
      </div>
    </main>
  );
}

App.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
  adding: PropTypes.bool.isRequired,
  setAdding: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  words: state.words.all,
  adding: state.words.adding,
});

const mapDispatch = {
  setAdding,
};

export default connect(mapState, mapDispatch)(App);
