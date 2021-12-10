import {
  SET_JACKPOT_DATA,
  SET_WINNING_PRIZE,
  SET_DISPLAY_WIN_PRIZE,
  UPDATE_DISPLAY_WIN_PRIZE,
  REMOVE_WIN_PRIZE_FROM_LIST_AND_DISPLAY_DATA,
  SHOW_TOAST,
  SET_SERVICE_BELL,
  REMOVE_SERVICE_BELL_FROM_LIST,
} from '../types';

export const setJackpotData = (jackpotData) => ({
  type: SET_JACKPOT_DATA,
  jackpotData,
});

export const setWinningPrizeData = (winningPrizeData) => ({
  type: SET_WINNING_PRIZE,
  winningPrizeData,
});

export const setDisplayWinPrize = (isPlayingAnimation) => ({
  type: SET_DISPLAY_WIN_PRIZE,
  isPlayingAnimation,
});

export const updateDisplayWinPrize = (cashInStatus) => ({
  type: UPDATE_DISPLAY_WIN_PRIZE,
  cashInStatus,
});

export const removeWinningData = (winningPrizeData) => ({
  type: REMOVE_WIN_PRIZE_FROM_LIST_AND_DISPLAY_DATA,
  winningPrizeData,
});

export const setShowToast = (showData) => ({
  type: SHOW_TOAST,
  payload: {
    show: showData.show,
    data: showData.data,
  },
});

export const setServiceBell = (serviceBellData) => ({
  type: SET_SERVICE_BELL,
  payload: {
    show: serviceBellData.action,
    data: serviceBellData.ip,
  },
});

export const removeServiceBell = (id) => ({
  type: REMOVE_SERVICE_BELL_FROM_LIST,
  id,
});
