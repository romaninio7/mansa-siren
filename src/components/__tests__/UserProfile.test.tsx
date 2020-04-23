import React from 'react';
import { mount } from 'enzyme';
import UserProfile from 'components/UserProfile';
import UserBusiness from 'components/UserBusiness';

let wrapper;

describe('UserProfile component', () => {
  beforeEach(() => {
    wrapper = mount(<UserProfile />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('shows the user business block', () => {
    expect(wrapper.find(UserBusiness).length).toEqual(1);
  });
  it('renders the profile data such as avatar, firstName, lastName, jobTitle, phoneNumber', () => {
    expect(wrapper.find('img').prop('src')).toMatch('http');
    expect(wrapper.find('.firstName').isEmpty()).toEqual(false);
    expect(wrapper.find('.lastName').isEmpty()).toEqual(false);
    expect(wrapper.find('.jobTitle').isEmpty()).toEqual(false);
    expect(wrapper.find('.phoneNumber').isEmpty()).toEqual(false);
  });
});
