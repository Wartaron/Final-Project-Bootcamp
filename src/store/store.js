import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from '../reducers/index.js';

let middlewares = [thunk];
let middleware = applyMiddleware(...middlewares);

export default createStore(reducers, middleware);
