import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import history from './services/history';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default App;
