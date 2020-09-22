import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Input.module.css';
import { getStyles } from '../utilities/styles';
import { startListening, stopListening } from '../redux/listen/actions';

function Input({
  listening,
  heard,
  startListening,
  stopListening,
}) {
  function pickWord(word) {
    console.log(`[${word}]`);
  }

  function buildButton() {
    if (listening) {
      return (
        <button
          className={styles.listen}
          onClick={stopListening}
        >
          Stop
        </button>
      );
    }

    return (
      <button
        className={styles.listen}
        onClick={startListening}
      >
        Listen
      </button>
    );
  }

  function buildWords() {
    const words = heard.split(' ');
    const all = words.reduce((all, word) => {
      if (word) {
        return [...all, word, ' '];
      }
      return all;
    }, []);

    return all.map((word, index) => {
      const isBlank = word === ' ';
      const handleClick = isBlank ? undefined : () => pickWord(word);
      const divClass = isBlank ? styles.blank : styles.word;

      return (
        <div
          key={index}
          className={divClass}
          onClick={handleClick}
        >
          {word}
        </div>
      );
    });
  }

  const inputStyles = getStyles({
    [styles.input]: true,
    [styles.listening]: listening,
  });

  return (
    <main className={styles.main}>
      <div className={inputStyles}>
        {buildWords()}
      </div>
      {buildButton()}
    </main>
  );
}

Input.propTypes = {
  listening: PropTypes.bool.isRequired,
  heard: PropTypes.string.isRequired,
  startListening: PropTypes.func.isRequired,
  stopListening: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  listening: state.listen.listening,
  heard: state.listen.heard,
});

const mapDispatch = {
  startListening,
  stopListening,
};

export default connect(mapState, mapDispatch)(Input);
