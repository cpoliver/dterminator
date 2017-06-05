import React from 'react';
import { View } from 'react-native';

import screenStyles from '../../styles/screenStyles';
import { Header, Placeholder } from '../common';

const Randomizer = () => (
  <View style={screenStyles.view}>
    <Header>Randomizer</Header>
    <Placeholder iconName="dice-5" />
  </View>
);

export { Randomizer };
