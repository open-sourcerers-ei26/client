import React from 'react';
import {shallow} from 'enzyme';
import NewGameFormValidators from '../components/NewGameFormValidators';

describe('<NewGameFormValidators/>', () => {
    it('Renders without crashing', () => {
        shallow(<NewGameFormValidators />);
    });
});