import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import fonts from '../../assets/fonts/index.js';
import ForgotPassBtn from '../buttons/ForgotPassBtn';
import SignInBtn from '../buttons/SignInBtn';
import SimpleInput from '../inputs/VisibleSign/SimpleInput';
import SpecialInput from '../inputs/UnvisibleSign/SpecialInput';
import SocialMediaBlock from '../SocialMediaBlock';
import Logo from '../Logo';

const LogIn = () => {
  return (
    <View style={styles.main_container}>
      <Logo />
      <View>
        <SimpleInput placeholder="Email or login" />
        <SpecialInput placeholder="Password" />
      </View>
      <ForgotPassBtn />
      <View style={styles.logIn_wrap}>
        <SignInBtn />
        <Text style={styles.signWith}>or sign in with</Text>
      </View>
      <SocialMediaBlock />
      <View />
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  signWith: {
    fontFamily: fonts.ComfortaaVariableFontWght,
    color: 'rgba(0,0,0,0.34)',
    alignSelf: 'center',
  },
  logIn_wrap: {
    gap: 25,
    marginBottom: 25,
  },
});
