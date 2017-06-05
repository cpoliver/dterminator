import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../styles';

const Header = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.background,
    elevation: 2,
    height: 64,
    justifyContent: 'center',
    paddingTop: 20,
    position: 'relative'
  },
  text: {
    color: colors.main,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

Header.propTypes = {
  children: PropTypes.string
};

export { Header };
