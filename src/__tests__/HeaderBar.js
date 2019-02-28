import React from 'react';
import {shallow} from 'enzyme';
import HeaderBar from '../components/HeaderBar';

describe('<HeaderBar/>', () => {
    it('Renders without crashing', () => {
        shallow(<HeaderBar />);
    });
});