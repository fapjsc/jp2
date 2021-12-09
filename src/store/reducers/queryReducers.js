import { SET_QUERY_TYPE } from '../types';

const initialState = {
  media: '',
};

const queryReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY_TYPE:
      return {
        media: action.query,
      };
    default:
      return state;
  }
};

export default queryReducers;
