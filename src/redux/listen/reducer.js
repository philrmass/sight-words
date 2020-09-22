import {
  START_LISTENING,
  STOP_LISTENING,
  ADD_RESULT,
} from './actions';

const defaultState = {
  recognition: null,
  listening: false,
};

export default function listenReducer(state = defaultState, action) {
  switch (action.type) {
    case START_LISTENING: {
      console.log('START_LISTENING');
      return {
        ...state,
        recognition: action.recognition,
        listening: true,
      };
    }
    case STOP_LISTENING:
      console.log('STOP_LISTENING');
      state.recognition.abort();
      state.recognition.onresult = undefined;
      state.recognition.onend = undefined;

      return {
        ...state,
        listening: false,
      };
    case ADD_RESULT:
      console.log('ADD_RESULT', action.text);
      return {
        ...state,
        heard: action.text,
        confidence: action.confidence,
      };
    default:
      return state;
  }
}
