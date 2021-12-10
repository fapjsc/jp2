import {
  SEND_HAND_PAY_REQUEST,
  HAND_PAY_SUCCESS,
  HAND_PAY_FAIL,
  CLEAN_HAND_PAY_STATE,
} from '../types';

const initialState = {
  status: null,
  error: null,
  data: null,
};

const handPayReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEND_HAND_PAY_REQUEST:
      return {
        status: 'pending',
        error: null,
        data: null,
      };

    case HAND_PAY_SUCCESS:
      return {
        status: 'completed',
        error: null,
        data: action.payload,
      };

    case HAND_PAY_FAIL:
      return {
        status: 'completed',
        error: action.payload,
        data: null,
      };

    case CLEAN_HAND_PAY_STATE:
      return {
        status: null,
        error: null,
        data: null,
      };
    default:
      return state;
  }
};

export default handPayReducers;
