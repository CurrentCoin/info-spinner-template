import React, { Component } from 'react';
import logo from './logo_cc.svg';
import logoInverted from './logo_cc_dark.svg';
import './App.css';

export default class InfoSpinner extends Component {
  render() {
    const {
      spinSpeed,
      title,
      content,
      inverted,
      spinAxis,
    } = this.props

    const spinX = spinAxis === 'x' ? 1 : 0
    const spinY = spinAxis === 'y' ? 1 : 0
    const spinZ = spinAxis === 'z' ? 1 : 0

    return (
      <div className={
        "App" + (inverted ? ' App--inverted' : '')
      }>

        <style dangerouslySetInnerHTML={{__html:
          `@keyframes App-logo-spin {
            from {
              transform: rotate3d(${spinX}, ${spinY}, ${spinZ}, 0deg);
            }
            to {
              transform: rotate3d(${spinX}, ${spinY}, ${spinZ}, 360deg);
            }`
        }} />
        <header className={
          "App-header"
            + (inverted ? ' App-header--inverted' : '')
        }>
          <img src={inverted ? logoInverted : logo} className="App-logo" alt="logo"
            style={{
              animation: `App-logo-spin infinite ${60 / spinSpeed}s linear` // rotations per minute
            }}
          />
          <h1 className="App-title">{title}</h1>
        </header>
        <p className={
          "App-intro"
            + (inverted ? ' App-intro--inverted' : '')
        }>
          {content}
        </p>
      </div>
    );
  }
}
