import React from 'react';
import { StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import {
  Decider, DecisionDetail, Home, Profile, Randomizer, Settings
} from './components/pages';

const store = createStore(reducers);

StatusBar.setBarStyle('light-content', true);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Swiper loop={false} showsPagination={false} index={1}>
          <Randomizer />
          <Swiper loop={false} showsPagination={false} index={1} horizontal={false}>
            <Profile />
            <DecisionDetail />
            <Home />
            <Settings />
          </Swiper>
          <Decider />
        </Swiper>
      </Provider>
    );
  }
}

export default App;
