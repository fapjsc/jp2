import { v4 as uuid } from 'uuid';

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

const initialState = {
  jackpotData: null,
  winningPrize: [],
  displayWinPrize: null,
  showToast: { show: false, data: null },
  serviceBell: [],
};

const jackpotReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_JACKPOT_DATA:
      return {
        ...state,
        jackpotData: action.jackpotData,
      };

    case SET_WINNING_PRIZE: {
      const { id } = action.winningPrizeData;
      const item = { ...action.winningPrizeData };
      const existsItem = state.winningPrize.find((el) => el.id === id);

      if (existsItem) {
        return {
          ...state,
          winningPrize: state.winningPrize.map((el) => (el.id === id ? item : el)),
        };
      }
      return {
        ...state,
        winningPrize: [...state.winningPrize, item],
      };
    }

    case SET_DISPLAY_WIN_PRIZE:
      return {
        ...state,
        displayWinPrize: state.winningPrize[0]
          ? { ...state.winningPrize[0], isPlayingAnimation: action.isPlayingAnimation || 'notPlaying' }
          : null,
      };

    case UPDATE_DISPLAY_WIN_PRIZE:
      return {
        ...state,
        displayWinPrize: {
          ...state.displayWinPrize,
          cashInStatus: action.cashInStatus,
        },
      };

    case REMOVE_WIN_PRIZE_FROM_LIST_AND_DISPLAY_DATA:
      if (state.winningPrize[0].id === action.winningPrizeData.id) {
        return {
          ...state,
          winningPrize: state.winningPrize.filter((el) => el.id !== action.winningPrizeData.id),
          displayWinPrize: null,
        };
      }
      return {
        ...state,
      };

    case SHOW_TOAST:
      return {
        ...state,
        showToast: {
          show: action.payload.show,
          data: action.payload.data,
        },
      };

    case SET_SERVICE_BELL:
      if (action.payload.show === 'action') {
        return {
          ...state,
          serviceBell: [
            ...state.serviceBell,
            {
              ...action.payload,
              id: uuid(),
              time: new Date().toLocaleTimeString(),
            },
          ],
        };
      }
      return {
        ...state,
        serviceBell: state.serviceBell.map((el) => {
          if (el.data === action.payload.data) return { ...el, show: action.payload.show };
          return el;
        }),
      };

    case REMOVE_SERVICE_BELL_FROM_LIST:
      return {
        ...state,
        serviceBell: state.serviceBell.filter((el) => el.id !== action.id),
      };

    default:
      return state;
  }
};

export default jackpotReducers;
