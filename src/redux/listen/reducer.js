const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

import {
  INIT,
  LISTEN,
} from './actions';

const defaultState = {
  recognition: null,
  listening: false,
  status: 'not listening',
  heard: '',
};

export default function listenReducer(state = defaultState, action) {
  switch (action.type) {
    case INIT: {
      const recognition = new SpeechRecognition();
      console.log('INIT', recognition);
      return {
        ...state,
        recognition,
      };
    }
    case LISTEN:
      console.log('LISTEN');
      return {
        ...state,
      };
    default:
      return state;
  }
}
