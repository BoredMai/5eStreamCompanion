import cn from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { acShield, score as acScore } from './index.css';
import { tag, score, whiteOutline } from '../../index.css';

export default class ACShield extends Component {
  render() {
    const { value } = this.props;

    return (
      <div className={acShield}>
        <div className={cn(tag, whiteOutline)}>AC</div>
        <div className={cn(acScore, score, whiteOutline)}>{value}</div>
      </div>
    );
  }

  static propTypes = {
    value: PropTypes.number.isRequired,
  };
}
