import * as React from 'react';
import UserBusinessItem from 'components/business/UserBusinessItem';
import { mount } from 'enzyme';

let wrapper;

describe('UserBusinessItem component rendering', () => {
  beforeEach(() => {
    wrapper = mount(
      <UserBusinessItem
        businessValue='879878949'
        businessData={['blue', 'briefcase', 'Siret', 'siret']}
      />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shows a valid business data', () => {
    expect(wrapper.find('.siret').text()).toEqual('879878949');
    expect(wrapper.exists('.blue')).toBeTruthy();
    expect(wrapper.exists('.briefcase')).toBeTruthy();
    expect(wrapper.find('.business-name').text()).toEqual('Siret: ');
  });
});
