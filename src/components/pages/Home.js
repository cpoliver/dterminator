import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

class Home extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.titleStyle}>dterminator</Text>
        <Text>an app for the indecisive</Text>
        <Text>made with love by @cpoliver</Text>
        <View style={styles.iconContainer}>
          <SocialIcon type="github" iconSize={styles.iconStyle.iconSize} />
          <SocialIcon type="linkedin" iconSize={styles.iconStyle.iconSize} />
          <SocialIcon type="twitter" iconSize={styles.iconStyle.iconSize} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row'
  },
  iconStyle: {
    fontSize: 24
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Home };
