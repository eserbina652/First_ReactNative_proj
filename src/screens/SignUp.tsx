import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Logo from '../components_/Logo';
import SocialMediaBlock from '../components_/SocialMediaBlock';
import Registration from '../Registration';

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

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFF0F9',
  },
  under_logo_text: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
});
