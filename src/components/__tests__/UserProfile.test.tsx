import * as React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import UserProfile from 'components/UserProfile';
import UserBusiness from 'components/business/UserBusiness';
import faker from 'faker';

let wrapper;

describe('UserProfile component rendering', () => {
  it('has a valid snapshot', () => {
    faker.name.firstName = jest.fn(() => 'Kevin');
    faker.name.lastName = jest.fn(() => 'Costner');
    faker.name.jobTitle = jest.fn(() => 'Actor');
    faker.phone.phoneNumber = jest.fn(() => '1-980-605-4322');
    faker.image.avatar = jest.fn(
      () =>
        'https://s3.amazonaws.com/uifaces/faces/twitter/josecarlospsh/128.jpg'
    );

    const tree = renderer.create(<UserProfile />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('UserProfile component content', () => {
  //wrapper = mount(<UserProfile />);
  beforeEach(() => {
    wrapper = mount(<UserProfile />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('shows the user business block', () => {
    expect(wrapper.find(UserBusiness).length).toEqual(1);
  });

  it('renders the profile data such as avatar, firstName, lastName, jobTitle, phoneNumber', () => {
    expect(wrapper.find('img').prop('src')).toMatch('http');
    expect(wrapper.find('.firstName').text().length).toBeGreaterThan(1);
    expect(wrapper.find('.lastName').text().length).toBeGreaterThan(1);
    expect(wrapper.find('.jobTitle').text().length).toBeGreaterThan(1);
    expect(wrapper.find('.phoneNumber').text().length).toBeGreaterThan(1);
  });
});
