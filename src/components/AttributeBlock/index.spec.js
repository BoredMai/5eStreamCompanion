import React from 'react';
import { shallow } from 'enzyme';
import AttributeBlock from '.';

describe('<AttributeBlock />', () => {
  let wrapper;
  const props = {
    attribute: 'STR',
    value: 20,
  };

  beforeEach(() => {
    wrapper = shallow(<AttributeBlock {...props} />);
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('renders correct bonus value', () => {
    const bonus = wrapper.find('div.bonus');
    expect(bonus).toHaveLength(1);
    expect(bonus.text()).toBe('+5');
  });

  it('renders correct bonus value on numbers under 10', () => {
    wrapper = shallow(<AttributeBlock {...props} value={9} />);
    const bonus = wrapper.find('div.bonus');
    expect(bonus).toHaveLength(1);
    expect(bonus.text()).toBe('-1');
  });
});
