import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoggedInTypeNavigation, ScreensName} from '../constants';
import DrawerNavigation from './DrawerNavigation';
import NavBar from '../components_/NavBar';
import Stream from '../screens/Stream';

const LoggedInStack = createNativeStackNavigator<LoggedInTypeNavigation>();

export default () => {
  return (
    <LoggedInStack.Navigator initialRouteName={ScreensName.STREAM}>
      <LoggedInStack.Screen
        options={{
          header: () => <NavBar title="Stream" />,
          headerShown: true,
        }}
        name={ScreensName.STREAM}
        component={Stream}
      />
      <LoggedInStack.Screen
        name={ScreensName.DRAWER_STACK}
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </LoggedInStack.Navigator>
  );
};
