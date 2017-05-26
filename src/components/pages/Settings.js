import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './pageStyle';
import { Header } from '../common';

class Settings extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header>Settings</Header>
      </View>
    );
  }
}

export { Settings };
