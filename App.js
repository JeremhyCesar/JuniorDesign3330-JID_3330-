import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './src/navigation/HomeNavigator';
import LoginNavigator from './src/navigation/LoginNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};

export default App;
