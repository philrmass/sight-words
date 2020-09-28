import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/App.module.css';
import { saveData } from '../utilities/file';
import { setAdding } from '../redux/words/actions';
import Input from './Input';
import Words from './Words';

function App({
  words,
  adding,
  setAdding,
}) {
  function buildEditUi() {
    const isEditing = false;
    if (!isEditing) {
      return null;
    }

    return (
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
    );
  }

  return (
    <main className={styles.main}>
      <Input />
      {buildEditUi()}
      <Words />
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
