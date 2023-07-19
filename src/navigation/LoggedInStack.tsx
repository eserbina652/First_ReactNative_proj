import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreensName} from '../constants';
import TabBarNavigation from './TabBarNavigation';

const LoggedInStack = createNativeStackNavigator();

export default () => {
  return (
    <LoggedInStack.Navigator initialRouteName={ScreensName.STREAM}>
      {/*<LoggedInStack.Screen*/}
      {/*  options={{*/}
      {/*    header: () => <NavBar title="Stream" />,*/}
      {/*    headerShown: true,*/}
      {/*  }}*/}
      {/*  name={ScreensName.STREAM}*/}
      {/*  component={Stream}*/}
      {/*/>*/}
      <LoggedInStack.Screen
        name={ScreensName.TAB_BAR_STACK}
        component={TabBarNavigation}
        options={{headerShown: false}}
      />
    </LoggedInStack.Navigator>
  );
};
