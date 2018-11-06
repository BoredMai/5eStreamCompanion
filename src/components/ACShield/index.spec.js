import React from 'react';
import { shallow } from 'enzyme';
import ACShield from '.';

describe('<ACShield />', () => {
  let wrapper;
  const props = {
    value: 20,
  };

  beforeEach(() => {
    wrapper = shallow(<ACShield {...props} />);
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
