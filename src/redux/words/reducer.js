import {
  ADD_WORDS,
} from './actions';

const defaultState = {
  all: [],
};

export default function wordsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_WORDS:
      console.log('ADD', action.words);
      return {
        ...state,
        all: [...state.all, ...action.words],
      };
    default:
      return state;
  }
}
