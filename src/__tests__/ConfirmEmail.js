import React from 'react';
import {shallow} from 'enzyme';
import ConfirmEmail from '../components/ConfirmEmail';

describe('<ConfirmEmail/>', () => {
    it('Renders without crashing', () => {
        shallow(<ConfirmEmail />);
    });
});

