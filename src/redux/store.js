import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import wordsReducer from './words/reducer';

const rootReducer = combineReducers({
  words: wordsReducer,
});

export default createStore(
  rootReducer,
  {},
  applyMiddleware(thunk),
);
