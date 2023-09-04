import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LoggedOutNavigation,
  NavigationProp,
  ScreensName,
} from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteAccountBtn = () => {
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
    <TouchableOpacity onPress={onLogOut} style={styles.active_btn}>
      <Text style={styles.login_btn_text}>Delete Account</Text>
    </TouchableOpacity>
  );
};

export default DeleteAccountBtn;

const styles = StyleSheet.create({
  active_btn: {
    maxWidth: '80%',
    minWidth: '80%',
    backgroundColor: '#FFF8FC',
    borderRadius: 10,
    padding: 16,
    alignSelf: 'center',
  },
  login_btn_text: {
    color: 'deeppink',
    alignSelf: 'center',
  },
});
