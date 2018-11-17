import React from 'react';
import { shallow } from 'enzyme';
import Chaotic from '../../assets/characters/chaotic';
import Hyuna from '../../assets/characters/hyuna';
import Jack from '../../assets/characters/jack';
import CharacterBanner from '.';

describe('<CharacterBanner />', () => {
  let wrapper;

  it('renders properly', () => {
    wrapper = shallow(<CharacterBanner {...Chaotic} />);
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  describe('Battle Mode', () => {
    it('renders properly on battle mode', () => {
      wrapper = shallow(<CharacterBanner {...Chaotic} battleMode />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('displays short name when defined', () => {
      wrapper = shallow(<CharacterBanner {...Chaotic} battleMode />);
      const nameTag = wrapper.find('span[className="nameTag"]');
      expect(nameTag.text()).toBe('Lee');
    });

    it("displays first name when short name isn't defined", () => {
      wrapper = shallow(<CharacterBanner {...Jack} battleMode />);
      const nameTag = wrapper.find('span[className="nameTag"]');
      expect(nameTag.text()).toBe('Einwynn');
    });

    it('displays name properly on single word name', () => {
      wrapper = shallow(<CharacterBanner {...Hyuna} battleMode />);
      const nameTag = wrapper.find('span[className="nameTag"]');
      expect(nameTag.text()).toBe('Carrie');
    });
  });
});
