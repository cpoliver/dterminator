import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import Router from './Routing';
import rootReducer from './reducers';

const isDev = () => process.env.NODE_ENV === `development`;
const middleware = isDev() ? [createLogger({ level: 'info' })] : [];

const store = createStore(rootReducer, applyMiddleware(...middleware));

StatusBar.setBarStyle('light-content', true);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
