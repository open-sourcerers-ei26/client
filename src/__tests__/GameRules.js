import React from 'react';
import {shallow} from 'enzyme';
import GameRules from '../components/GameRules';

describe('<GameRules/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameRules />);
    });
});