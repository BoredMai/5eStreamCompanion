import React from 'react';
import { shallow } from 'enzyme';
import CharacterBanner from '.';

describe('<CharacterBanner />', () => {
  let wrapper;
  let props = {
    name: "Savarax 'Lee' Swovarah",
    player: 'Chaotic',
    race: 'Dragonborn',
    classes: [{ name: 'Bard', level: 1 }],
    level: 1,
    hp: { current: 10, max: 10 },
    xp: 0,
    attributes: [
      { attribute: 'STR', value: 17 },
      { attribute: 'DEX', value: 8 },
      { attribute: 'CON', value: 14 },
      { attribute: 'INT', value: 13 },
      { attribute: 'WIS', value: 10 },
      { attribute: 'CHA', value: 16 },
    ],
    ac: 10,
  };

  beforeEach(() => {
    wrapper = shallow(<CharacterBanner {...props} />);
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
