import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { middlewares } from './../src/createStore';
import RootReducer from './../src/reducers/index';

export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}


export const testStore = (initialState) => {
    const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreMiddleware(RootReducer, initialState);
}