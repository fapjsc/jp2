import { SET_JACKPOT_DATA } from '../types';

const initialState = {
  jackpotData: null,
};

const jackpotReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_JACKPOT_DATA:
      return {
        jackpotData: action.jackpotData,
      };
    default:
      return state;
  }
};

export default jackpotReducers;
