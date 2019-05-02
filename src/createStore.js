import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import Rootreducer from './reducers/index';


export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const store = createStoreWithMiddleware(Rootreducer);