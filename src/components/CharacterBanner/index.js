import React, { Component, Fragment } from 'react';
import {
  characterBanner,
  charClass,
  leftColumn,
  name,
  playerName,
  race,
  rightColumn,
  topRow,
} from './index.css';

export default class CharacterBanner extends Component {
  renderHeader() {
    return (
      <Fragment>
        <div className={topRow}>
          <div className={leftColumn}>
            <span className={name}>Character Name</span>
            <span className={playerName}>Player Name</span>
          </div>
          <div className={rightColumn}>
            <span className={race}>Character Race</span>
            <span className={charClass}>Character Class</span>
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    return <div className={characterBanner}>{this.renderHeader()}</div>;
  }
}
