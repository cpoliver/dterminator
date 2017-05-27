import React from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header, Placeholder } from '../common';

const Profile = () => (
  <View style={pageStyles.view}>
    <Header>Profile</Header>
    <Placeholder iconName="account" />
  </View>
);

export { Profile };
