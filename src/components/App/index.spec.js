import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe('<App />', () => {
  let wrapper;

  it('renders properly', () => {
    wrapper = shallow(<App />);
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('renders properly on battle mode', () => {
    window.history.pushState({}, '', 'http://localhost/?battleMode');
    wrapper = shallow(<App />);
    expect(wrapper.getElement()).toMatchSnapshot();
    expect(wrapper.find('.battle-mode')).toHaveLength(1);
  });
});
