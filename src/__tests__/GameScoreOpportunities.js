import React from 'react';
import {shallow} from 'enzyme';
import GameScoreOpportunities from '../components/GameScoreOpportunities';

describe('<GameScoreOpportunities/>', () => {
    it('Renders without crashing', () => {
        shallow(<GameScoreOpportunities />);
    });
});