import * as React from 'react';
import Account from 'components/finance/Account';
import { mount } from 'enzyme';

let wrapper;
const mockCallBack = jest.fn();
const mockCallBack2 = jest.fn();

describe('Account component rendering', () => {
  beforeEach(() => {
    wrapper = mount(
      <Account
        account_id='afcf2bd0'
        account_type='TRANSACTION'
        account_number='26178346'
        currency='GBP'
        current='175.52'
        onAccountSelect={mockCallBack}
        onOpenModal={mockCallBack2}
      />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shows a valid finance data', () => {
    expect(wrapper.find('.account-type').text()).toEqual('TRANSACTION');
    expect(wrapper.find('.account-number').text()).toEqual('26178346');
    expect(wrapper.exists('.pound')).toBeTruthy();
    expect(wrapper.find('.current').text()).toEqual('175.52');
  });

  // expect(mockCallBack.mock.calls.length).toEqual(1);

  it('fires valid functions callbacks', () => {
    expect(wrapper.find('.account-item').length).toEqual(1);
    wrapper.find('.account-item').simulate('click');
    expect(mockCallBack).toBeCalled();
    expect(mockCallBack2).toBeCalled();
  });
});
