import {
  START_GAME,
  STOP_GAME,
  SET_MATCHED,
  CLEAR_MATCHED,
} from './actions';

const defaultState = {
  isPlaying: false,
  remaining: [],
  current: [],
  matched: [],
  done: [],
};

const gameSize = 10;

export default function wordsReducer(state = defaultState, action) {
  switch (action.type) {
    case START_GAME: {
      const current = action.words.slice(0, gameSize);
      const remaining = action.words.slice(gameSize);
      return {
        ...state,
        isPlaying: true,
        remaining,
        current,
      };
    }
    case STOP_GAME:
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
