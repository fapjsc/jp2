import socketClient from 'socket.io-client';
import config from '../config/config.json';

// store
import store from '../store';

// actions
import { setJackpotData } from '../store/actions/jackpotActions';

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
};

export const disconnect = () => {
  if (socket) socket.close();
};
