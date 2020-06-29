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
