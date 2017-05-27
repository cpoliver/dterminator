import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const socialPlatforms = {
  github: 'https://github.com/cpoliver',
  linkedin: 'https://linkedin.com/in/cpoliver',
  twitter: 'https://twitter.com/cpoliver'
};

const openSocialUrl = (platform) => {
  const url = socialPlatforms[platform];
  Linking.openURL(url);
};

const Home = () => (
  <View style={styles.pageContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>dterminator</Text>
      <Text style={styles.subtitle}>an app for the indecisive</Text>
    </View>
    <View>
      <Text style={styles.footerText}>made with love by @cpoliver</Text>
      <View style={styles.iconContainer}>
        <SocialIcon type="github" onPress={() => openSocialUrl('github')} light />
        <SocialIcon type="linkedin" onPress={() => openSocialUrl('linkedin')} light />
        <SocialIcon type="twitter" onPress={() => openSocialUrl('twitter')} light />
      </View>
    </View>
  </View>
);

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
