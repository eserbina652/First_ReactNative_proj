import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LoggedOutNavigation,
  NavigationProp,
  ScreensName,
} from '../../../../constants';

const LogOutBtn = () => {
  const navigation =
    useNavigation<NavigationProp<LoggedOutNavigation, string>>();
  const onLogOut = () => {
    // @ts-ignore
    navigation.navigate(ScreensName.LOGGED_OUT_STACK);
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
