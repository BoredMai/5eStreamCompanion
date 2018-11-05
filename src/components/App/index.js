import React, { Component } from 'react';
import cn from 'classnames';

import { app, font8Bit } from './index.css';
import CharacterBanner from '../CharacterBanner';

export default class App extends Component {
  render() {
    return (
      <div className={cn(app, font8Bit)}>
        <CharacterBanner />
      </div>
    );
  }
}
