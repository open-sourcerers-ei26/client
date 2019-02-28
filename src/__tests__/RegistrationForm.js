import React from 'react';
import {shallow} from 'enzyme';
import RegistrationForm from '../components/RegistrationForm';

describe('<RegistrationForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />);
    });
});