import React from 'react';
import { incrementer, decrementer } from './redux/compteur/compteur.actions';
import { useDispatch } from 'react-redux';
import Resultat from './Resultat';
import Users from './Users';

function Compteur() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Compteur</h1>
      <button onClick={() => dispatch(incrementer())}>+</button>
      <Resultat />
      <button onClick={() => dispatch(decrementer())}>-</button>
      <Users />
    </>
  );
}

export default Compteur;
