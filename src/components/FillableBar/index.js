import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { barFill, fillableBar } from './index.css';

export default class FillableBar extends Component {
  render() {
    const { color, current, max } = this.props;
    const width = (current * 100) / max + '%';
    const style = {
      backgroundColor: color,
      width,
    };
    return (
      <div className={fillableBar}>
        <div className={barFill} style={style} />
        <span>
          {current} / {max}
        </span>
      </div>
    );
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };
}
