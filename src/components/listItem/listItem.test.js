import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/index';
import ListItem from './index';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Example desc'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Example desc'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should Render listitem', () => {
            const Component = findByTestAttr(wrapper, 'listItemComponent');
            expect(Component.length).toBe(1);
        });

        it('Should Render title', () => {
            const title = findByTestAttr(wrapper, 'listItemTitle');
            expect(title.length).toBe(1);
        });

        it('Should Render desc', () => {
            const desc = findByTestAttr(wrapper, 'listItemDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Should NOT render', () => {
      
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Example desc'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Component is not Rendered', () => {
            const Component = findByTestAttr(wrapper, 'listItemComponent');
            expect(Component.length).toBe(0);
        });
    })
});


