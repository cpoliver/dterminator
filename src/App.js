import React from 'react';
import { StatusBar } from 'react-native';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { scenes } from './Routing';
import reducers from './reducers';

const store = createStore(reducers);

StatusBar.setBarStyle('light-content', true);

const App = () => (
  <Provider store={store}>
    <Router scenes={scenes} />
  </Provider>
);

export default App;
