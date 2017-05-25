import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

class Home extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>dterminator</Text>
          <Text style={styles.subtitle}>an app for the indecisive</Text>
        </View>
        <View>
          <Text style={styles.footerText}>made with love by @cpoliver</Text>
          <View style={styles.iconContainer}>
            <SocialIcon type="github" light />
            <SocialIcon type="linkedin" light />
            <SocialIcon type="twitter" light />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerText: {
    color: '#d5d4cf',
    fontSize: 18,
    marginBottom: 6
  },
  iconContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pageContainer: {
    alignItems: 'center',
    backgroundColor: '#201b21',
    flex: 1,
    justifyContent: 'center'
  },
  subtitle: {
    color: '#f6f7fb',
    fontSize: 16
  },
  title: {
    color: '#25c7ee',
    fontSize: 42,
    fontWeight: 'bold'
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export { Home };
