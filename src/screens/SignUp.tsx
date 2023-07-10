import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import fonts from '../assets/fonts';
import Logo from '../components_/Logo';
import SocialMediaBlock from '../components_/SocialMediaBlock';
import SimpleInput from '../components_/inputs/VisibleSign/SimpleInput';
import DropDownInput from '../components_/inputs/dropDownInput/DropDownInput';
import SpecialInput from '../components_/inputs/UnvisibleSign/SpecialInput';
import AgreeBtn from '../components_/checkBox/AgreeBtn';

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
      <View>
        <Text>Public Information</Text>
        <SimpleInput placeholder="Nickname" />
        <Text>Private Information</Text>
        <SimpleInput placeholder="Name" />
        <SimpleInput placeholder="Email" />
        <DropDownInput />
        <Text>Account Security</Text>
        <SpecialInput placeholder="Password" />
        <SpecialInput placeholder="Re-enter Password" />
      </View>
      <View>
        <AgreeBtn label="Terms and Conditions" />
        <AgreeBtn label="Privacy Policy" />
      </View>
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
  register: {
    fontFamily: fonts.ComfortaaVariableFontWght,
    color: 'rgba(0,0,0,0.34)',
    alignSelf: 'center',
  },
  under_logo_text: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
});
