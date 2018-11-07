import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { barFill, barLabel, fillableBar } from './index.css';

export default class FillableBar extends Component {
  render() {
    const { className, color, current, label, max } = this.props;
    const width = Math.max(0, Math.min((current * 100) / max, 100)) + '%';
    const style = {
      backgroundColor: color,
      width,
    };
    return (
      <div className={className}>
        <div className={fillableBar}>
          <span className={barLabel}>{label}</span>
          <div className={barFill} style={style} />
          <span>
            {current} / {max}
          </span>
        </div>
      </div>
    );
  }

  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    label: PropTypes.string,
    max: PropTypes.number.isRequired,
  };
}
