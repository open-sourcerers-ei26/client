import React from 'react';
import {shallow} from 'enzyme';
import NewGameForm from '../components/NewGameForm';

describe('<NewGameForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<NewGameForm />);
    });
});