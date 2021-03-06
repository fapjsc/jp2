import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Toast
import { ToastContainer } from 'react-toastify';

// Components
import App from './App';
import store from './store';

// Style
import './sass/index.scss';
import './sass/react-transition-group.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer pauseOnFocusLoss={false} toastClassName="dark-toast" />

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
