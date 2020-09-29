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
      return {
        ...state,
        matched: action.matched,
      };
    }
    case CLEAR_MATCHED: {
      const filtered = state.current.filter((item) => !state.matched.includes(item.word));
      const size = gameSize - filtered.length;
      const current = [...filtered, ...state.remaining.slice(0, size)];
      const remaining = state.remaining.slice(size);
      return {
        ...state,
        current,
        matched: [],
        remaining,
        done: state.matched,
      };
    }
    default:
      return state;
  }
}
