import React from 'react';
import { Provider } from 'react-redux';
import Compteur from './Compteur';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Compteur />
    </Provider>
  );
}
