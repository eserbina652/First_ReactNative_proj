import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {apple, djucy, facebook, google} from '../../assets';
import fonts from '../../assets/fonts/index.js';
import ForgotPassBtn from '../buttons/ForgotPassBtn';
import SocialMediaBtn from '../buttons/SocialMediaBtn';
import SignInBtn from '../buttons/SignInBtn';
import SimpleInput from '../inputs/VisibleSign/SimpleInput';
import SpecialInput from '../inputs/UnvisibleSign/SpecialInput';

const LogIn = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.logo_wrap}>
        <Image style={styles.logo} source={djucy} />
      </View>
      <View>
        <SimpleInput placeholder="Email or login" />
        <SpecialInput placeholder="Password" />
      </View>
      <ForgotPassBtn />
      <View style={styles.logIn_wrap}>
        <SignInBtn />
        <Text style={styles.signWith_btn}>or sign in with</Text>
      </View>
      <View style={styles.socialMedia_block}>
        <View style={styles.socialMedia_row}>
          <SocialMediaBtn
            buttonType="facebook_btn"
            source={facebook}
            text="Facebook"
          />
          <SocialMediaBtn
            buttonType="google_btn"
            source={google}
            text="Google"
            imgStyle={styles.apple_additional_style}
          />
        </View>
        <SocialMediaBtn
          buttonType="apple_btn"
          source={apple}
          text="Sign in with Apple"
        />
      </View>
      <View />
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  logo_wrap: {
    margin: 25,
    alignSelf: 'center',
  },
  logo: {
    width: 130,
    height: 28,
  },
  signWith_btn: {
    fontFamily: fonts.ComfortaaVariableFontWght,
    color: 'rgba(0,0,0,0.34)',
    alignSelf: 'center',
  },
  socialMedia_row: {
    flexDirection: 'row',
    minWidth: '100%',
    gap: 16,
  },
  logIn_wrap: {
    gap: 25,
    marginBottom: 25,
  },
  socialMedia_block: {
    gap: 16,
    marginBottom: 25,
  },
  apple_additional_style: {
    width: 17,
    height: 20,
  },
});
