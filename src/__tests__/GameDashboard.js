import React from 'react';
import {shallow} from 'enzyme';
import GameDashboard from '../components/GameDashboard';

describe('<GameDashboard/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameDashboard />);
    });
});