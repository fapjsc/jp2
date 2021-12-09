import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import jackpotReducers from './reducers/jackpotReducers';
import queryReducers from './reducers/queryReducers';

const reducer = combineReducers({
  jackpot: jackpotReducers,
  mediaQuery: queryReducers,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
