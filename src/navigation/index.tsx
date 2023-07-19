import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScreensName} from '../constants';
import LoggedOutStack from './LoggedOutStack';
import LoggedInStack from './LoggedInStack';

const MainStack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
          // @ts-ignore
          header: null,
          animation: 'slide_from_right',
        }}
        initialRouteName={ScreensName.LOGGED_OUT_STACK}>
        <MainStack.Screen
          name={ScreensName.LOGGED_OUT_STACK}
          component={LoggedOutStack}
        />
        <MainStack.Screen
          name={ScreensName.LOGGED_IN_STACK}
          component={LoggedInStack}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
