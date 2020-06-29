//Definition du store
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import toutReducers from './tout.reducers';

const store = createStore(toutReducers, applyMiddleware(Thunk));

export default store;
