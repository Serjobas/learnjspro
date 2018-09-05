import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default createStore(reducer, enhancer);
