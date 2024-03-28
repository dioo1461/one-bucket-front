/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import Navigator from './Navigator';

const ProvidedNavigator = () => {
  return (
    <ThemeProvider theme={{...theme}}>
      <Navigator />
    </ThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => ProvidedNavigator);
