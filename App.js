import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
