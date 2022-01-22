import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyle';
import 'sweetalert2/src/sweetalert2.scss'
import store from './store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>,
  document.getElementById('root')
)

