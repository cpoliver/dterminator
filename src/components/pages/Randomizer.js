import React, { Component } from 'react';
import { View } from 'react-native';

import pageStyles from './pageStyles';
import { Header, Placeholder } from '../common';

class Randomizer extends Component {
  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Randomizer</Header>
				<Placeholder iconName="dice-5" />
			</View>
    );
  }
}

export { Randomizer };
