import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './pageStyle';
import { Header } from '../common';

class Randomizer extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header>Randomizer</Header>
      </View>
    );
  }
}

export { Randomizer };
