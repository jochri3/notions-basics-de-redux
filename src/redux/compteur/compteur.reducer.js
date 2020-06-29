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

export default compteur;
