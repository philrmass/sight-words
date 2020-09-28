import {
  START_GAME,
  STOP_GAME,
  SET_MATCHED,
  CLEAR_MATCHED,
} from './actions';

const defaultState = {
  isPlaying: false,
  current: [],
  matched: [],
};

export default function wordsReducer(state = defaultState, action) {
  switch (action.type) {
    case START_GAME:
      console.log('START_GAME');
      return {
        ...state,
        isPlaying: true,
      };
    case STOP_GAME:
      console.log('STOP_GAME');
      return {
        ...state,
        isPlaying: false,
      };
    case SET_MATCHED: {
      console.log('SET_MATCHED');
      const current = state.current.filter((item) => !state.matched.includes(item.word));
      return {
        ...state,
        current,
        matched: action.matched,
      };
    }
    case CLEAR_MATCHED: {
      console.log('CLEAR_MATCHED');
      const current = state.current.filter((item) => !state.matched.includes(item.word));
      return {
        ...state,
        current,
        matched: [],
      };
    }
    default:
      return state;
  }
}
