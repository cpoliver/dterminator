import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header } from '../common';

class Settings extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Settings</Header>
      </View>
    );
  }
}

export { Settings };
