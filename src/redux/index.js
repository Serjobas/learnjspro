import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';
import history from '../history';
import { routerMiddleware } from 'react-router-redux';

const enhancer = composeWithDevTools(applyMiddleware(thunk, logger, routerMiddleware(history) ));
 
const store = createStore(reducer, enhancer);

export default store;