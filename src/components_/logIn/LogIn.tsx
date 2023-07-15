import React from 'react';
import {Text, View} from 'react-native';
import ForgotPassBtn from '../buttons/ForgotPassBtn';
import SignInBtn from '../buttons/signIn/SignInBtn';
import Input from '../inputs/Input';
import SocialMediaBlock from '../socialMedia/SocialMediaBlock';
import Logo from '../logo/Logo';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const LogIn = () => {
  const {t} = useTranslation();
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
        <Text style={styles.signWith}>{t('signInWith')}</Text>
      </View>
      <SocialMediaBlock />
      <View />
    </View>
  );
};

export default LogIn;
