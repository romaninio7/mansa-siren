import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import UserProfile from 'components/UserProfile';
import UserFinance from 'components/UserFinance';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('shows the user profile block', () => {
  expect(wrapper.find(UserProfile).length).toEqual(1);
});

it('shows the user financial block', () => {
  expect(wrapper.find(UserFinance).length).toEqual(1);
});
