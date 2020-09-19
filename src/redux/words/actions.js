export const ADD_WORDS = 'ADD_WORDS';

export function addWords(words) {
  return {
    type: ADD_WORDS,
    words,
  };
}
