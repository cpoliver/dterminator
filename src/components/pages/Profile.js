import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './pageStyle';
import { Header } from '../common';

class Profile extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header>Profile</Header>
      </View>
    );
  }
}

export { Profile };
