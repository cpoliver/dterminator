import React from 'react';
import { StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import {
  Decider, DecisionDetail, Home, Profile, Randomizer, Settings
} from './components/pages';

StatusBar.setBarStyle('light-content', true);

const App = () => (
  <Provider store={createStore(reducers)}>
    <Swiper loop={false} showsPagination={false} index={1}>
      <Randomizer />
      <Swiper loop={false} showsPagination={false} index={1} horizontal={false}>
        <Profile />
        <Home />
        <Settings />
      </Swiper>
      <Decider />
      <DecisionDetail />
    </Swiper>
  </Provider>
);

export default App;
