import { createStore, applyMiddleware, compose  } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';

const history = createBrowserHistory();
export { history };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history))
);

const connectedRouter = connectRouter(history)(reducer)

export default createStore(connectedRouter, enhancer);
