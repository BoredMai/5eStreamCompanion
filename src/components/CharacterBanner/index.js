import React, { Component } from 'react';
import { characterBanner } from './index.css';

export default class CharacterBanner extends Component {
  render() {
    return <div className={characterBanner}>This is a character banner.</div>;
  }
}
