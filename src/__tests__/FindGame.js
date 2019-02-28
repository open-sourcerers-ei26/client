import React from 'react';
import {shallow} from 'enzyme';
import FindGame from '../components/FindGame';

describe('<FindGame/>', () => {
    it('Renders without crashing', () => {
        shallow(<FindGame />);
    });
});