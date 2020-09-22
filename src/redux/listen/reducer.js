import {
  START_LISTENING,
  STOP_LISTENING,
  RESTART_LISTENING,
  ADD_RESULT,
} from './actions';

const defaultState = {
  recognition: null,
  listening: false,
  heard: '',
};

export default function listenReducer(state = defaultState, action) {
  switch (action.type) {
    case START_LISTENING: {
      return {
        ...state,
        recognition: action.recognition,
        listening: true,
      };
    }
    case STOP_LISTENING:
      state.recognition.onresult = undefined;
      state.recognition.onend = undefined;
      state.recognition.abort();

      return {
        ...state,
        recognition: null,
        listening: false,
      };
    case RESTART_LISTENING:
      if (state.listening) {
        state.recognition.start();
      }
      return {
        state,
      };
    case ADD_RESULT:
      return {
        ...state,
        heard: action.text,
        confidence: action.confidence,
      };
    default:
      return state;
  }
}
