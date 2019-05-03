import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../Utils/index';
import App from './App';

const setUp = (intialState = {}) => {
    const store = testStore(intialState);
    const wrapper =  shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;
}

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const intialState = {
            posts: [
                {
                    title: 'Example Title1',
                    body: 'Test'
                },
                {
                    title: 'Example Title2',
                    body: 'Test'
                },
                {
                    title: 'Example Title3',
                    body: 'Test'
                },
            ]
        }
        wrapper = setUp(intialState);
    });

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })

});
