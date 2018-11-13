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

  updateCharacter = newChar => {
    const { characters } = this.state;

    const charIndex = characters.findIndex(
      char => char.player === newChar.player
    );

    let newCharacters = characters.slice();
    newCharacters[charIndex] = newChar;

    this.setState({
      characters: newCharacters,
    });
  };

  renderBanner = (bannerProps, key) => (
    <CharacterBanner
      key={key}
      onUpdate={this.updateCharacter}
      {...bannerProps}
    />
  );

  render() {
    const { characters } = this.state;
    return (
      <div className={cn(characterContainer, font8Bit)}>
        {characters.map(this.renderBanner)}
      </div>
    );
  }
}
