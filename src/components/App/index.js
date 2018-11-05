import React, { Component } from 'react';
import { font8Bit } from './index.css';

export default class App extends Component {
  render() {
    return (
      <div className={font8Bit} style={{ textAlign: 'center' }}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
