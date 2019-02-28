import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from '../components/LoginForm';

describe('<LoginForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });
});