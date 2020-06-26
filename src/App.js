import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Compteur from './Compteur';

//Action creators : une fonction qui retourne un objet appelé action
// Action : c'est un objet qui a au moinsuu  attribut type
export const incrementer = () => {
  const action = {
    type: 'INCREMENTER',
  };
  return action;
};

export const decrementer = () => {
  return {
    type: 'DECREMENTER',
  };
};

//Reducer
const compteur = (state = 0, action) => {
  if (action.type === 'INCREMENTER') {
    return state + 1;
  } else if (action.type === 'DECREMENTER') {
    return state - 1;
  } else {
    return state;
  }
};

const toutReducers = combineReducers({
  valeur: compteur,
});

//Definition du store
const store = createStore(toutReducers);

export default function App() {
  return (
    <Provider store={store}>
      <Compteur />
    </Provider>
  );
}
