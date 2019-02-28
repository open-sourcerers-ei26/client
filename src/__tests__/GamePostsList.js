import React from 'react';
import {shallow} from 'enzyme';
import GamePostsList from '../components/GamePostsList';

describe('<GamePostList/>', () => {
    it('Renders without crashing', () => {
        shallow(<GamePostsList />);
    });
});