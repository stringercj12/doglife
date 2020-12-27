import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar translucent barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}