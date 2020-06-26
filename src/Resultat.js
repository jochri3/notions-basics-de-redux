import React from 'react';
import { useSelector } from 'react-redux';

function Resultat(props) {
  const valeur = useSelector((state) => {
    return state.valeur;
  });
  console.log('Je suis le composant Resultat : ', valeur);
  return (
    <span style={{ margin: '10px', color: 'red' }}>
      La valeur est : {valeur}
    </span>
  );
}

export default Resultat;
