import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Placeholder = ({ iconName }) => (
  <View style={styles.container}>
    <Icon color="#25c7ee" size={92} type="material-community" name={iconName} />
    <Text style={styles.text}>coming soon</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#25c7ee',
    fontSize: 20
  }
});

Placeholder.propTypes = {
  iconName: PropTypes.string.isRequired
};

export { Placeholder };
