import { SET_JACKPOT_DATA } from '../types';

export const temp = () => {};

export const setJackpotData = (jackpotData) => ({
  type: SET_JACKPOT_DATA,
  jackpotData,
});
