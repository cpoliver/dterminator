import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header } from '../common';

class Randomizer extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Randomizer</Header>
      </View>
    );
  }
}

export { Randomizer };
