import React from 'react';
import { shallow } from 'enzyme';
import FillableBar from '.';

describe('<FillableBar />', () => {
  let wrapper;
  let props = {
    color: '#ff6666',
    current: 100,
    max: 100,
  };

  beforeEach(() => {
    wrapper = shallow(<FillableBar {...props} />);
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('shrinks bar fill when current < max', () => {
    wrapper.setProps({ current: 40 });
    const barFill = wrapper.find('.barFill');
    const {
      style: { width },
    } = barFill.props();
    expect(width).toBe('40%');
  });

  it('does not overflow bar fill when current > max', () => {
    wrapper.setProps({ current: 120 });
    const barFill = wrapper.find('.barFill');
    const {
      style: { width },
    } = barFill.props();
    expect(width).toBe('100%');
  });

  it('does not underflow bar fill when current < 0', () => {
    wrapper.setProps({ current: -20 });
    const barFill = wrapper.find('.barFill');
    const {
      style: { width },
    } = barFill.props();
    expect(width).toBe('0%');
  });
});
