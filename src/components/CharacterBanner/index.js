import cn from 'classnames';
import React, { Component, Fragment } from 'react';

import ACShield from '../ACShield';
import AttributeBlock from '../AttributeBlock';
import FillableBar from '../FillableBar';

import {
  acShieldContainer,
  attributeContainer,
  bottomRow,
  characterBanner,
  charClass,
  flexColumn,
  marginTopHalf,
  name,
  playerName,
  race,
  topRow,
} from './index.css';

export default class CharacterBanner extends Component {
  renderHeader() {
    return (
      <Fragment>
        <div className={topRow}>
          <div className={flexColumn}>
            <span className={name}>Character Name</span>
            <span className={playerName}>Player Name</span>
          </div>
          <div className={flexColumn}>
            <FillableBar color={'#F66'} current={30} label={'HP'} max={60} />
            <FillableBar
              className={marginTopHalf}
              color={'#66F'}
              current={30}
              label={'XP'}
              max={60}
            />
          </div>
          <div className={flexColumn}>
            <span className={race}>Character Race</span>
            <span className={charClass}>Character Class</span>
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div className={characterBanner}>
        {this.renderHeader()}
        <div className={bottomRow}>
          <div className={attributeContainer}>
            <AttributeBlock attribute={'STR'} value={20} />
            <AttributeBlock attribute={'DEX'} value={20} />
            <AttributeBlock attribute={'CON'} value={20} />
            <AttributeBlock attribute={'INT'} value={20} />
            <AttributeBlock attribute={'WIS'} value={20} />
            <AttributeBlock attribute={'CHA'} value={20} />
          </div>
          <div className={cn(acShieldContainer)}>
            <ACShield value={20} />
          </div>
        </div>
      </div>
    );
  }
}
