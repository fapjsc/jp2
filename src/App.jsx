import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Utils
import { connectAgent } from './utils/connectAgentWithSocket';

// Hooks
import UseQuery from './hooks/useQuery';
import UseAudio from './hooks/useAudio';

// Actions
import setMediaQueryType from './store/actions/queryActions';

// Components
import OverView from './pages/OverView';
import JackpotToast from './components/JackpotToast';
import ServiceToast from './components/ServiceToast';

// Styles
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  const queryText = UseQuery();

  useEffect(() => {
    connectAgent();
  }, []);

  useEffect(() => {
    dispatch(setMediaQueryType(queryText));
  }, [dispatch, queryText]);

  useEffect(() => {
  }, []);

  return (
    <main>
      <OverView />
      <UseAudio />
      <JackpotToast />
      <ServiceToast />
    </main>
  );
};

export default App;
