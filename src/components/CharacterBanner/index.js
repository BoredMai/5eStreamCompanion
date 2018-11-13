import cn from 'classnames';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ACShield from '../ACShield';
import AttributeBlock from '../AttributeBlock';
import FillableBar from '../FillableBar';

import {
  acShieldContainer,
  attributeContainer,
  borderContainer,
  bottomRow,
  characterBanner,
  classTag,
  flexColumn,
  flexBasisHalf,
  marginTopHalf,
  nameTag,
  playerTag,
  raceTag,
  topRow,
} from './index.css';
import Attributes from '../../constants/attributes';
import { getNextLevelExp } from '../../constants/experience';

export default class CharacterBanner extends Component {
  flattenClassNames = ({ level, name }) => `${name} ${level}`;

  constructor(props) {
    super(props);

    const { player } = props;

    window[player] = {
      addXP: this.addXP,
      damage: this.damage,
      heal: this.heal,
      setHP: this.setHP,
    };
  }

  addXP = amount => {
    const { xp, onUpdate } = this.props;

    onUpdate({ ...this.props, xp: xp + amount });
  };

  damage = amount => {
    const {
      hp: { current, max },
      onUpdate,
    } = this.props;

    onUpdate({ ...this.props, hp: { current: current - amount, max } });
  };

  heal = amount => {
    const {
      hp: { current, max },
      onUpdate,
    } = this.props;

    onUpdate({
      ...this.props,
      hp: { current: Math.min(current + amount, max), max },
    });
  };

  setHP = amount => {
    const {
      hp: { max },
      onUpdate,
    } = this.props;

    onUpdate({ ...this.props, hp: { current: amount, max } });
  };

  renderAttribute = (attrBlock, key) => (
    <AttributeBlock key={key} {...attrBlock} />
  );

  renderAttributes() {
    const { attributes } = this.props;

    return (
      <div className={attributeContainer}>
        {attributes.map(this.renderAttribute)}
      </div>
    );
  }

  renderHeader() {
    const { classes, hp, level, name, player, race, xp } = this.props;
    return (
      <Fragment>
        <div className={topRow}>
          <div className={cn(flexBasisHalf, flexColumn)}>
            <span className={nameTag}>{name}</span>
            <span className={playerTag}>{player}</span>
          </div>
          <div className={flexColumn}>
            <FillableBar color={'#F66'} label={'HP'} {...hp} />
            <FillableBar
              className={marginTopHalf}
              color={'#66F'}
              current={xp}
              label={'XP'}
              max={getNextLevelExp(level)}
            />
          </div>
          <div className={flexColumn}>
            <span className={raceTag}>{race}</span>
            <span className={classTag}>
              {classes.map(this.flattenClassNames).join(', ')}
            </span>
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    const { ac } = this.props;
    return (
      <div className={borderContainer}>
        <div className={characterBanner}>
          {this.renderHeader()}
          <div className={bottomRow}>
            {this.renderAttributes()}
            <div className={cn(acShieldContainer)}>
              <ACShield value={ac} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    ac: PropTypes.number.isRequired,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        attribute: PropTypes.oneOf(Object.keys(Attributes)).isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
    classes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
      })
    ),
    hp: PropTypes.shape({
      current: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
    level: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    player: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    xp: PropTypes.number.isRequired,

    onUpdate: PropTypes.func.isRequired,
  };
}
