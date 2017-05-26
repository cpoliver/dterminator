import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header } from '../common';

class Profile extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Profile</Header>
      </View>
    );
  }
}

export { Profile };
