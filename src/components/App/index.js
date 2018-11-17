import cn from 'classnames';
import React, { Component } from 'react';

import { font8Bit } from '../../index.css';
import { characterContainer } from './index.css';
import CharacterBanner from '../CharacterBanner';
import Characters from '../../assets/characters';

export default class App extends Component {
  state = {
    characters: Characters,
  };

  renderBanner = (bannerProps, key) => {
    const { searchParams } = new URL(document.URL);
    const battleMode = searchParams.has('battleMode');

    return (
      <CharacterBanner battleMode={battleMode} key={key} {...bannerProps} />
    );
  };

  render() {
    const { characters } = this.state;
    const { searchParams } = new URL(document.URL);
    const battleMode = searchParams.has('battleMode');

    return (
      <div
        className={cn(
          { ['battle-mode']: battleMode },
          characterContainer,
          font8Bit
        )}
      >
        {characters.map(this.renderBanner)}
      </div>
    );
  }
}
