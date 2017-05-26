import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header, Placeholder } from '../common';

class Settings extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Settings</Header>
				<Placeholder iconName="settings" />
      </View>
    );
  }
}

export { Settings };
