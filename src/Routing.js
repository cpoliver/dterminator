import React from 'react';
import { StyleSheet } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';

import Main from './components/Main';
import { DecisionDetail } from './components/pages';

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: '#201b21'
  },
  leftButtonIconStyle: {
    tintColor: '#25c7ee'
  },
  rightButtonIconStyle: {
    tintColor: '#25c7ee'
  },
  titleStyle: {
    color: '#25c7ee',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const scenes = Actions.create(
  <Scene key="root" {...styles}>
    <Scene
      key="home"
      component={Main}
      hideNavBar={true}
    />
    <Scene
      key="decisionDetail"
      title="Decision Detail"
      component={DecisionDetail}
      hideNavBar={false}
    />
  </Scene>
);

export { scenes };
