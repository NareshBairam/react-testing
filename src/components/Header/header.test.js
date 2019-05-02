import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils/index';
import Header from './index';


const setUp = (props = {}) => {
    return shallow(<Header  {...props} />);
}

describe('Header Component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('Should run without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should render logo', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })
})

