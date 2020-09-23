export const SET_ADDING = 'SET_ADDING';
export const ADD_WORDS = 'ADD_WORDS';

export function setAdding(adding) {
  return {
    type: SET_ADDING,
    adding,
  };
}

export function addWords(words) {
  return {
    type: ADD_WORDS,
    words,
  };
}
