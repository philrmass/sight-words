import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../styles/Input.module.css';
import { init, listen } from '../redux/listen/actions';

function Input({
  recognition,
  listening,
  status,
  heard,
  init,
  listen,
}) {
  useEffect(() => {
    if (!recognition) {
      init();
      console.log('i');
    }
    console.log('e');
  }, [recognition]);

  return (
    <main className={styles.main}>
      <div className={styles.input}>
        {heard || status}
      </div>
      <button
        className={styles.listen}
        onClick={() => listen()}
      >
        Listen
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
};

export default connect(mapState, mapDispatch)(Input);
