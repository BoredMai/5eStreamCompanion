import React, { Component } from 'react';

import { font8Bit } from '../../index.css';
import CharacterBanner from '../CharacterBanner';

export default class App extends Component {
  render() {
    return (
      <div className={font8Bit}>
        <CharacterBanner />
      </div>
    );
  }
}
