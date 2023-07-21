import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import React from 'react';
import NavBar from '../components_/NavBar';
import {ScreensName} from '../constants';

const LoggedOutStack = createNativeStackNavigator();

export default () => {
  return (
    <LoggedOutStack.Navigator initialRouteName={ScreensName.SIGN_IN}>
      <LoggedOutStack.Screen
        options={{
          header: () => <NavBar title="signIn" />,
          headerShown: false,
        }}
        name={ScreensName.SIGN_IN}
        component={SignIn}
      />
      <LoggedOutStack.Screen
        options={{
          header: () => <NavBar title="signUp" withIcon={true} />,
          headerShown: false,
        }}
        name={ScreensName.SIGN_UP}
        component={SignUp}
      />
    </LoggedOutStack.Navigator>
  );
};
