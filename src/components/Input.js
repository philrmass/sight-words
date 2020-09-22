import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Input.module.css';
import { getStyles } from '../utilities/styles';
import { init, listen, stop } from '../redux/listen/actions';

function Input({
  recognition,
  listening,
  status,
  heard,
  init,
  listen,
  stop,
}) {
  useEffect(() => {
    if (!recognition) {
      init();
    }
  }, [recognition]);

  function handleListen() {
    if (listening) {
      stop();
    } else {
      listen();
    }
  }

  const inputStyles = getStyles({
    [styles.input]: true,
    [styles.listening]: listening,
  });

  return (
    <main className={styles.main}>
      <div className={inputStyles}>
        {heard}
      </div>
      <button
        className={styles.listen}
        onClick={handleListen}
      >
        {listening ? 'Stop' : 'Listen'}
      </button>
    </main>
  );
}

Input.propTypes = {
  recognition: PropTypes.object,
  listening: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  heard: PropTypes.string.isRequired,
  init: PropTypes.func.isRequired,
  listen: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  recognition: state.listen.recognition,
  listening: state.listen.listening,
  status: state.listen.status,
  heard: state.listen.heard,
});

const mapDispatch = {
  init,
  listen,
  stop,
};

export default connect(mapState, mapDispatch)(Input);
