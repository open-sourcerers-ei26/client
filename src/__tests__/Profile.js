import React from 'react';
import {shallow} from 'enzyme';
import Profile from '../components/Profile';

describe('<Profile/>', () => {
    it('Renders without crashing', () => {
        shallow(<Profile />);
    });
});