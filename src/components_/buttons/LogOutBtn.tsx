import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  LoggedOutNavigation,
  NavigationProp,
  ScreensName,
} from '../../constants';

const LogOutBtn = () => {
  const navigation =
    useNavigation<NavigationProp<LoggedOutNavigation, string>>();
  const onLogOut = async () => {
    try {
      await AsyncStorage.removeItem('loginData');
      const loginDataGet = await AsyncStorage.getItem('loginData');
      // @ts-ignore
      navigation.navigate(ScreensName.LOGGED_OUT_STACK);
      console.log('DATA FROM LOGIN OUT', loginDataGet);
    } catch (e) {
      console.log('Error was happened by removing data', e);
    }
  };
  return (
    <TouchableOpacity onPress={onLogOut} style={styles.logOut}>
      <Text>LogOut</Text>
    </TouchableOpacity>
  );
};

export default LogOutBtn;

const styles = StyleSheet.create({
  logOut: {
    fontSize: 18,
    fontWeight: '700',
    color: 'grey',
    alignSelf: 'flex-start',
  },
});
