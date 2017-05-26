import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './pageStyle';
import { Header } from '../common';

class Decider extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header>Decider</Header>
      </View>
    );
  }
}

export { Decider };
