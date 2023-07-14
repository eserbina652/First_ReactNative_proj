import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Logo from '../components_/logo/Logo';
import SocialMediaBlock from '../components_/socialMedia/SocialMediaBlock';
import Registration from '../registration/Registration';
import {styles} from './styles';

interface SignUpProps {
  registerText?: string;
}
const SignUp = ({registerText = 'Music Lovers'}: SignUpProps) => {
  return (
    <ScrollView style={styles.app_container}>
      <Logo />
      <View style={styles.under_logo_text}>
        <Text>Registration {registerText}</Text>
        <Text>Register with</Text>
      </View>
      <SocialMediaBlock />
      <Registration />
    </ScrollView>
  );
};

export default SignUp;
