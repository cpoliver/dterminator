import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header } from '../common';

class Decider extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Decider</Header>
      </View>
    );
  }
}

export { Decider };
