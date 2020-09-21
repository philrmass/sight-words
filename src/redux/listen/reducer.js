import {
  INIT,
  LISTEN,
  STOP,
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
      console.log('INIT', action.recognition);
      return {
        ...state,
        recognition: action.recognition,
      };
    }
    case LISTEN:
      console.log('LISTEN');
      state.recognition.start();

      return {
        ...state,
        listening: true,
      };
    case STOP:
      console.log('STOP');
      state.recognition.abort();

      return {
        ...state,
        listening: false,
      };
    default:
      return state;
  }
}
