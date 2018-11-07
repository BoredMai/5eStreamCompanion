import React, { Component } from 'react';

import { font8Bit } from '../../index.css';
import CharacterBanner from '../CharacterBanner';

export default class App extends Component {
  state = {
    characters: [
      {
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
      },
      {
        name: "Victor 'Invictus' Ursus",
        player: 'PhoenixFire',
        race: 'Half-Orc',
        classes: [{ name: 'Fighter', level: 1 }],
        level: 1,
        hp: { current: 13, max: 13 },
        xp: 200,
        attributes: [
          { attribute: 'STR', value: 16 },
          { attribute: 'DEX', value: 14 },
          { attribute: 'CON', value: 16 },
          { attribute: 'INT', value: 9 },
          { attribute: 'WIS', value: 12 },
          { attribute: 'CHA', value: 12 },
        ],
        ac: 15,
      },
    ],
  };

  renderBanner = (bannerProps, key) => (
    <CharacterBanner key={key} {...bannerProps} />
  );

  render() {
    const { characters } = this.state;
    return <div className={font8Bit}>{characters.map(this.renderBanner)}</div>;
  }
}
