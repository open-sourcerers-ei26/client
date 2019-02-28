import React from 'react';
import {shallow} from 'enzyme';
import RegistrationPage from '../components/RegistrationPage';

describe('<RegistrationPage/>', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationPage />);
    });
});