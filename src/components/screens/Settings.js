import React from 'react';
import { View } from 'react-native';

import { screenStyles } from '../../styles';
import { Header, Placeholder } from '../common';

const Settings = () => (
  <View style={screenStyles.view}>
    <Header>Settings</Header>
    <Placeholder iconName="settings" />
  </View>
);

export { Settings };
