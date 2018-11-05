import React from 'react';
import { shallow } from 'enzyme';
import CharacterBanner from '.';

describe('<CharacterBanner />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterBanner />);
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
