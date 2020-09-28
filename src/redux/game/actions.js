export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';
export const SET_MATCHED = 'SET_MATCHED';
export const CLEAR_MATCHED = 'CLEAR_MATCHED';

export function startGame(words) {
  return {
    type: START_GAME,
    words,
  };
}

export function stopGame() {
  return {
    type: STOP_GAME,
  };
}

export function setMatched(matched) {
  return {
    type: SET_MATCHED,
    matched,
  };
}

export function clearMatched() {
  return {
    type: CLEAR_MATCHED,
  };
}
