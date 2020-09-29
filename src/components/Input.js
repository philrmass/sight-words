import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Input.module.css';
import { getStyles } from '../utilities/styles';
import { setMatched, clearMatched } from '../redux/game/actions';
import { startListening, stopListening } from '../redux/listen/actions';
import { addWords } from '../redux/words/actions';

function Input({
  listening,
  heard,
  adding,
  isPlaying,
  current,
  startListening,
  stopListening,
  addWords,
  setMatched,
  clearMatched,
}) {
  //??? remove
  useEffect(() => {
    startListening();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const found = current.reduce((found, item) => {
        const match = heard.some((_word) => {
          const word = _word.toLowerCase();
          return (item.word === word) ||
            (item.matches && item.matches.some((match) => match === word));
        });
        if (match) {
          return [...found, item.word];
        }
        return found;
      }, []);
      if (found.length > 0) {
        console.log('FND', found);
        setMatched(found);
        setTimeout(() => {
          clearMatched();
        }, 1000);
      }
    }
  }, [current, heard]);

  function pickWord(word) {
    if (adding) {
      console.log(`[${word}]`);
      addWords([word]);
    }
    console.log('NO-ADD');
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
    const all = heard.reduce((all, word) => {
      if (word) {
        return [...all, word, ' '];
      }
      return all;
    }, []);

    return all.map((word, index) => {
      const isBlank = word === ' ';
      const handleClick = isBlank ? undefined : () => pickWord(word);
      let divClass = isBlank ? styles.blank : styles.word;

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
    [styles.adding]: adding,
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
  heard: PropTypes.arrayOf(PropTypes.string).isRequired,
  adding: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  current: PropTypes.arrayOf(PropTypes.object).isRequired,
  startListening: PropTypes.func.isRequired,
  stopListening: PropTypes.func.isRequired,
  addWords: PropTypes.func.isRequired,
  setMatched: PropTypes.func.isRequired,
  clearMatched: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  listening: state.listen.listening,
  heard: state.listen.heard,
  adding: state.words.adding,
  isPlaying: state.game.isPlaying,
  current: state.game.current,
});

const mapDispatch = {
  startListening,
  stopListening,
  addWords,
  setMatched,
  clearMatched,
};

export default connect(mapState, mapDispatch)(Input);
