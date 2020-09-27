import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('Should be a proper test', () => {
	expect(shallow(<App />)).toMatchSnapshot();
});