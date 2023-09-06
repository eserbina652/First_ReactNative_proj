import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainNavigationStack, ScreensName} from '../constants';
import LoggedOutStack from './LoggedOutStack';
import LoggedInStack from './LoggedInStack';
import EncryptedStorage from 'react-native-encrypted-storage';
import {UserDataI, userProfileData} from '../api/data/profileData';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const MainStack = createNativeStackNavigator<MainNavigationStack>();

export default () => {
  // const getLoginData = async () => {
  //   const loginData = await EncryptedStorage.getItem('loginData');
  //   if (loginData) {
  //     const parsedData = await JSON.parse(loginData);
  //     parsedData.filter(
  //       (el: UserDataI) =>
  //         el.privatInfo.password === parsedData.privatInfo.password,
  //     );
  //   }
  // };

  // const getRegistrationData = async () => {
  //   const registerData = await EncryptedStorage.getItem('registerData');
  //   if (registerData)
  //   const parsedData = JSON.parse();
  // };

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
          header: () => null,
          animation: 'slide_from_right',
        }}
        initialRouteName={
          ScreensName.LOGGED_OUT_STACK
          // getData ? ScreensName.LOGGED_IN_STACK : ScreensName.LOGGED_OUT_STACK
        }>
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
