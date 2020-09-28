import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './game/reducer';
import listenReducer from './listen/reducer';
import wordsReducer from './words/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  listen: listenReducer,
  words: wordsReducer,
});

export default createStore(
  rootReducer,
  {},
  applyMiddleware(thunk),
);
