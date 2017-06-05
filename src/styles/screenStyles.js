import { StyleSheet } from 'react-native';

import { colors } from './colors'

export const screenStyles = StyleSheet.create({
  view: {
    alignItems: 'stretch',
    backgroundColor: colors.lightest,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});
