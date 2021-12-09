import { SET_QUERY_TYPE } from '../types';

const setMediaQueryType = (query) => ({
  type: SET_QUERY_TYPE,
  query,
});

export default setMediaQueryType;
