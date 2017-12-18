import {createStore, combineReducers, applyMiddleware} from 'redux';
// import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import allPosts from './post';
import replies from './reply';

const reducer = combineReducers({user, allPosts, replies})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware
))
const store = createStore(reducer, middleware)

export default store;
export * from './user';
export * from './post';
export * from './reply';
