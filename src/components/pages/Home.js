import React, { Component } from 'react';
import { Linking, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const socialPlatforms = {
  github: 'https://github.com/cpoliver',
  linkedin: 'https://linkedin.com/in/cpoliver',
  twitter: 'https://twitter.com/cpoliver'
};

class Home extends Component {
  openSocialUrl(platform) {
    const url = socialPlatforms[platform];
    Linking.openURL(url);
  }

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
            <SocialIcon type="github" onPress={() => this.openSocialUrl('github')} light />
            <SocialIcon type="linkedin" onPress={() => this.openSocialUrl('linkedin')} light />
            <SocialIcon type="twitter" onPress={() => this.openSocialUrl('twitter')} light />
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
