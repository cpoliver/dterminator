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
          <Scene key="root">
            <Scene key="home" component={App} title="Home"/>
            <Scene key="decisionDetail" component={DecisionDetail} title="Decision Detail" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default AppWithRouting;
