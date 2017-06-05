import React from 'react';
import { View } from 'react-native';

import { screenStyles } from '../../styles';
import { Header, Placeholder } from '../common';

const Profile = () => (
  <View style={screenStyles.view}>
    <Header>Profile</Header>
    <Placeholder iconName="account" />
  </View>
);

export { Profile };
