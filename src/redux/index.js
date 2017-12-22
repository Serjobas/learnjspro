import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk, logger));

export const store = createStore(reducer, enhancer);
