import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Settings</Text>
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

export { Settings };
