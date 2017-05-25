import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Home</Text>
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

export { Home };
