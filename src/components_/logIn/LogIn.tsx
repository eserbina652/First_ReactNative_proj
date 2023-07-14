import React from 'react';
import {Text, View} from 'react-native';
import ForgotPassBtn from '../buttons/ForgotPassBtn';
import SignInBtn from '../buttons/signIn/SignInBtn';
import Input from '../inputs/Input';
import SocialMediaBlock from '../socialMedia/SocialMediaBlock';
import Logo from '../logo/Logo';
import {styles} from './styles';

const LogIn = () => {
  return (
    <View style={styles.main_container}>
      <Logo />
      <View>
        <Input placeholder="Email or login" />
        <Input placeholder="Password" />
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
