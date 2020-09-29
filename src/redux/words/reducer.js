import { getObject, setObject } from '../../utilities/storage';
import defaultWords from '../../data/words.json';

import {
  SET_ADDING,
  ADD_WORDS,
} from './actions';

const defaultState = {
  adding: false,
  all: getObject('sightWordsAll', defaultWords),
};

export default function wordsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ADDING:
      return {
        ...state,
        adding: action.adding,
      };
    case ADD_WORDS: {
      const items = action.words.map((word) => ({
        word,
        level: 9,
      }));
      const all = [...state.all, ...items];
      setObject('sightWordsAll', all);
      return {
        ...state,
        all,
      };
    }
    default:
      return state;
  }
}
