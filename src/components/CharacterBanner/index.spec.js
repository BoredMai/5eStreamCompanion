import React from 'react';
import { shallow } from 'enzyme';
import {
  JustName,
  NoShortName,
  PlayerOne,
} from '../../../__tests__/mocks/charMock';
import CharacterBanner from '.';

describe('<CharacterBanner />', () => {
  let wrapper;

  it('renders properly', () => {
    wrapper = shallow(<CharacterBanner {...PlayerOne} />);
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  describe('Battle Mode', () => {
    it('renders properly on battle mode', () => {
      wrapper = shallow(<CharacterBanner {...PlayerOne} battleMode />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('displays short name when defined', () => {
      wrapper = shallow(<CharacterBanner {...PlayerOne} battleMode />);
      const nameTag = wrapper.find('span[className="nameTag"]');
      expect(nameTag.text()).toBe('One');
    });

    it("displays first name when short name isn't defined", () => {
      wrapper = shallow(<CharacterBanner {...NoShortName} battleMode />);
      const nameTag = wrapper.find('span[className="nameTag"]');
      expect(nameTag.text()).toBe('Name');
    });

    it('displays name properly on single word name', () => {
      wrapper = shallow(<CharacterBanner {...JustName} battleMode />);
      const nameTag = wrapper.find('span[className="nameTag"]');
      expect(nameTag.text()).toBe('Monika');
    });
  });
});
