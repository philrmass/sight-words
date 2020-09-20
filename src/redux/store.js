import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import listenReducer from './listen/reducer';
import wordsReducer from './words/reducer';

const rootReducer = combineReducers({
  words: wordsReducer,
  listen: listenReducer,
});

export default createStore(
  rootReducer,
  {},
  applyMiddleware(thunk),
);
