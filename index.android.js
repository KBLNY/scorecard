/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WinNotification from "./src/pages/WinNotification.js";

export default class ScoreCard extends Component {
  render() {
    return (
      <WinNotification />
    );
  }
}

AppRegistry.registerComponent('ScoreCard', () => ScoreCard);
