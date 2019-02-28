import React from 'react';
import {shallow} from 'enzyme';
import NewGame from '../components/NewGame';

describe('<NewGame/>', () => {
    it('Renders without crashing', () => {
        shallow(<NewGame />);
    });
});