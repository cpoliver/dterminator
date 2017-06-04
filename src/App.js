import React from 'react';
import { StatusBar } from 'react-native';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import { scenes } from './Routing';
import rootReducer from './reducers';

const isDev = () => process.env.NODE_ENV === `development`;
const middleware = isDev() ? [createLogger({ level: 'info' })] : [];

const store = createStore(rootReducer, applyMiddleware(...middleware));
const RouterWithRedux = connect()(Router);

StatusBar.setBarStyle('light-content', true);

const App = () => (
  <Provider store={store}>
    <RouterWithRedux duration={150} scenes={scenes} />
  </Provider>
);

export default App;
