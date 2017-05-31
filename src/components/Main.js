import React from 'react';
import Swiper from 'react-native-swiper';

import {
    Decider, Home, Profile, Randomizer, Settings
} from './pages';

const Main = () => (
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

export default Main;
