import * as React from 'react';
import UserBusiness from 'components/business/UserBusiness';
import UserBusinessItem from 'components/business/UserBusinessItem';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

let wrapper;

describe('UserBusiness', () => {
  beforeEach(() => {
    act(() => {
      wrapper = mount(<UserBusiness />);
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('has a valid shanpshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders 3 UserBusinessItem', () => {
    expect(wrapper.find(UserBusinessItem).length).toEqual(3);
  });
});
