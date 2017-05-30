import React from 'react';
import { StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import {
  Decider, DecisionDetail, Home, Profile, Randomizer, Settings
} from './components/pages';

const store = createStore(reducers);

StatusBar.setBarStyle('light-content', true);

const App = () => (
  <Swiper loop={false} showsPagination={false} index={1}>
    <Randomizer />
    <Swiper loop={false} showsPagination={false} index={1} horizontal={false}>
      <Profile />
      <Home />
      <Settings />
    </Swiper>
    <Decider />
  </Swiper>
);

class AppWithRouting extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" {...styles}>
            <Scene key="home" component={App} hideNavBar={true} />
            <Scene key="decisionDetail" title="Decision Detail" component={DecisionDetail} hideNavBar={false} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = {
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
};

export default AppWithRouting;
