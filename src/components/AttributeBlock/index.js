import cn from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Attributes from '../../constants/attributes';

import { attributeBlock, bonus, tag, score } from './index.css';
import { whiteOutline } from '../../index.css';

export default class AttributeBlock extends Component {
  render() {
    const { attribute, value } = this.props;

    return (
      <div className={attributeBlock}>
        <div className={cn(tag, whiteOutline)}>{attribute}</div>
        <div className={cn(score, whiteOutline)}>{value}</div>
        <div className={cn(bonus, whiteOutline)}>
          {value > 9 && '+'}
          {Math.floor((value - 10) / 2)}
        </div>
      </div>
    );
  }

  static propTypes = {
    attribute: PropTypes.oneOf(Object.keys(Attributes)).isRequired,
    value: PropTypes.number.isRequired,
  };
}
