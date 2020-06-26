import React, { useState } from 'react';

export default function App() {
  return (
    <>
      <h1>Compteur</h1>
      <Compteur />
    </>
  );
}

function Compteur() {
  const [valeur, definirValeur] = useState(0);
  return (
    <>
      <button onClick={() => definirValeur(valeur + 1)}>+</button>
      <Resultat valeurActuelle={valeur} />
      <button onClick={() => definirValeur(valeur - 1)}>-</button>
    </>
  );
}

function Resultat(props) {
  return (
    <span style={{ margin: '10px', color: 'red' }}>
      La valeur est : {props.valeurActuelle}
    </span>
  );
}
