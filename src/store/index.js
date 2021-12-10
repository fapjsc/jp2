import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import jackpotReducers from './reducers/jackpotReducers';
import queryReducers from './reducers/queryReducers';
import handPayReducers from './reducers/handPayReducers';

const reducer = combineReducers({
  jackpot: jackpotReducers,
  mediaQuery: queryReducers,
  handPay: handPayReducers,
});

const middleware = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
