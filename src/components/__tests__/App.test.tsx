import React from 'react';
import { mount } from 'enzyme';
import App from 'components/App';
import UserProfile from 'components/UserProfile';
import UserFinance from 'components/UserFinance';

let wrapper;

describe('App component', () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('shows the user profile block', () => {
    expect(wrapper.find(UserProfile).length).toEqual(1);
  });

  it('shows the user financial block', () => {
    expect(wrapper.find(UserFinance).length).toEqual(1);
  });
});
