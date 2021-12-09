import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Utils
import { connectAgent } from './utils/connectAgentWithSocket';

// Hooks
import UseQuery from './hooks/useQuery';

// Actions
import setMediaQueryType from './store/actions/queryActions';

// Components
import OverView from './pages/OverView';

const App = () => {
  const dispatch = useDispatch();

  const queryText = UseQuery();

  useEffect(() => {
    connectAgent();
  }, []);

  useEffect(() => {
    dispatch(setMediaQueryType(queryText));
  }, [dispatch, queryText]);

  return (
    <div className="App">
      <OverView />
    </div>
  );
};

export default App;
