import socketClient from 'socket.io-client';
import config from '../config/config.json';

// store
import store from '../store';

// Utils
import { _getAmount } from './helpers';

// actions
import {
  setJackpotData,
  setWinningPrizeData,
  setShowToast,
  setServiceBell,
} from '../store/actions/jackpotActions';

const SERVER = config.AGENT_SERVER_IP;

let socket;
let tmp;

export const connectAgent = () => {
  socket = socketClient(SERVER);

  socket.on('connect', () => {
    console.log('socket connect success');
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });

  socket.on('connect_error', (err) => {
    console.log('connect_error', err);
  });

  socket.on('jackpot', (jackpotData) => {
    if (JSON.stringify(jackpotData) === tmp) return;

    tmp = JSON.stringify(jackpotData);
    store.dispatch(setJackpotData(jackpotData));
  });

  socket.on('win-prize', (winPrizeData) => {
    store.dispatch(
      setWinningPrizeData({
        ...winPrizeData,
        amountWinning: _getAmount(winPrizeData.amountWinning),
      }),
    );

    if (store.getState().jackpot.displayWinPrize) {
      store.dispatch(setShowToast({ show: true, data: winPrizeData }));
    }
  });

  socket.on('serviceBell', (data) => {
    store.dispatch(setServiceBell(data));
  });
};

export const disconnect = () => {
  if (socket) socket.close();
};
