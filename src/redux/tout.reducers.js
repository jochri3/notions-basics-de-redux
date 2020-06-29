import { combineReducers } from 'redux';
import compteur from './compteur/compteur.reducer';
import usersReducer from './users/users.reducer';

const toutReducers = combineReducers({
  valeur: compteur,
  usersData: usersReducer,
});

export default toutReducers;
