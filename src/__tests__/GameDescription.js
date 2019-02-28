import React from 'react';
import {shallow} from 'enzyme';
import GameDescription from '../components/GameDescription';

describe('<GameDescription/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameDescription />);
    });
});