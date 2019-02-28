import React from 'react';
import {shallow} from 'enzyme';
import CreatePostForm from '../components/CreatePostForm';

describe('<CreatePostForm/>', () => {
    it('Renders without crashing', () => {
        shallow(<CreatePostForm />);
    }); 
});