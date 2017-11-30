import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const app = document.getElementById('app');
  ReactDOM.render(<App store={store}/>, app);
});
