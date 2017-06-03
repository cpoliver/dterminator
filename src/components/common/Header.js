import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#201b21',
    elevation: 2,
    height: 64,
    justifyContent: 'center',
    paddingTop: 20,
    position: 'relative'
  },
  text: {
    color: '#25c7ee',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

Header.propTypes = {
  children: PropTypes.string
};

export { Header };
