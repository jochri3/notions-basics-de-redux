import React from 'react';
import { incrementer, decrementer } from './App';
import { useDispatch } from 'react-redux';
import Resultat from './Resultat';

function Compteur() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Compteur</h1>
      <button onClick={() => dispatch(incrementer())}>+</button>
      <Resultat />
      <button onClick={() => dispatch(decrementer())}>-</button>
    </>
  );
}

export default Compteur;
