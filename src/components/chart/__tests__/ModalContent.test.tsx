import * as React from 'react';
import ModalContent from 'components/chart/ModalContent';
import { mount } from 'enzyme';

let wrapper;
const mockCallBack = jest.fn();

describe('ModalContent component rendering', () => {
  beforeEach(() => {
    wrapper = mount(
      <ModalContent
        onDismiss={mockCallBack}
        children={<div className='chart'>Test chart</div>}
      />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('fires when trying to close the open modal', () => {
    wrapper.find('.dismiss-click-out').simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
    wrapper.find('.dismiss-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(2);
  });

  it('display a chart component', () => {
    expect(wrapper.find('.chart').text()).toEqual('Test chart');
  });
});
