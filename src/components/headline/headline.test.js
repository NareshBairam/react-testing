import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils/index';
import Headline from './index';


const setUp = (props = {}) => {
    return shallow(<Headline  {...props} />);
}

describe('Headerline Component', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props);
        });

        it('Should run without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('Should render a Desc', () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        })

    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })
    });

});

