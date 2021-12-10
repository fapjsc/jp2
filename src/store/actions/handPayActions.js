import {
  SEND_HAND_PAY_REQUEST,
  HAND_PAY_SUCCESS,
  HAND_PAY_FAIL,
  CLEAN_HAND_PAY_STATE,
} from '../types';

import config from '../../config/config.json';

const SERVER = config.AGENT_SERVER_IP;

export const sendHandPayRequest = (handPayData) => async (dispatch) => {
  dispatch({ type: SEND_HAND_PAY_REQUEST });

  try {
    const { insertId, uuid } = handPayData;
    const url = `${SERVER}/test/jackpotHandPay`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        insertId,
        uuid,
      }),
    });

    const data = await response.text();

    if (!response.ok) throw new Error('Could not fetch agent server');

    if (data?.includes('not get')) throw new Error('Cash in fail');

    dispatch({
      type: HAND_PAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HAND_PAY_FAIL,
      payload: error.message,
    });
  }
};

export const cleanHandState = () => ({
  type: CLEAN_HAND_PAY_STATE,

});
