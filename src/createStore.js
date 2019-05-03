import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import Rootreducer from './reducers/index';
// import logger from 'redux-logger';

import { createLogger } from 'redux-logger';
const logger = createLogger({ 
    diff: true,
    predicate: (state, action) => {
        return action.type === 'getPosts';
      } 
});

export const middlewares = [ReduxThunk];



// export const store = createStore(Rootreducer, applyMiddleware(...middleware));
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleware(Rootreducer);

// export const store = createStore(Rootreducer, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));