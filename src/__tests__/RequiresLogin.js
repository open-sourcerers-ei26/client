import React from 'react';
import {shallow} from 'enzyme';
import RequiresLogin from '../components/RequiresLogin';

describe('<RequiresLogin/>', () => {
    it('Renders without crashing', () => {
        shallow(<RequiresLogin />);
    });
});