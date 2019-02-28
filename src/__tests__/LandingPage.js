import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from '../components/LandingPage';

describe('<LandingPage/>', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });
});