import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header } from '../common';

class DecisionDetail extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Decision Detail</Header>
      </View>
    );
  }
}

export { DecisionDetail };
