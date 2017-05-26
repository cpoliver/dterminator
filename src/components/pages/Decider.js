import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import decisions from '../../data/decisions.json';
import pageStyles from './pageStyles';
import { Header } from '../common';

class Decider extends Component {
	renderItems() {
		return decisions.map((item, index) => (
      <ListItem key={index} title={item.name} />
		));
	}

  render() {
    return (
      <View style={pageStyles.view}>
        <Header>Decider</Header>
				<List style={{ flex: 1 }}>
					{this.renderItems()}
				</List>
			</View>
    );
  }
}

export { Decider };
