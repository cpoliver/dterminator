import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Decider extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Decider</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Decider };
