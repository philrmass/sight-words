import {
  SET_ADDING,
  ADD_WORDS,
} from './actions';

function validateWords(stored) {
  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    return [];
  }
}

const defaultState = {
  adding: false,
  all: validateWords(localStorage.signWordsAll),
};

export default function wordsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ADDING:
      console.log('SET_ADDING', action.adding);
      return {
        ...state,
        adding: action.adding,
      };
    case ADD_WORDS: {
      const items = action.words.map((word) => ({
        word,
        level: 3,
      }));
      //const fil = state.all.filter((item) => !item.word);
      //const all = [...fil, ...items];
      const all = [...state.all, ...items];
      localStorage.signWordsAll = JSON.stringify(all);
      console.log('ADD', action.words);
      //??? json stringify and store
      return {
        ...state,
        all,
      };
    }
    default:
      return state;
  }
}
