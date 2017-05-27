import React from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header, Placeholder } from '../common';

const Settings = () => (
  <View style={pageStyles.view}>
    <Header>Settings</Header>
    <Placeholder iconName="settings" />
  </View>
);

export { Settings };
