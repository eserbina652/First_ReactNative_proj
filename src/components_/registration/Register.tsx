import React from 'react';
import {Text, View} from 'react-native';
import SignUpBtn from '../buttons/signUp/SignUpBtn';
import {styles} from './styles';
const Register = () => {
  return (
    <View style={styles.footer_container}>
      <Text>Don’t have an account?</Text>
      <View style={styles.register_wrap}>
        <SignUpBtn text="Music Lover" />
        <SignUpBtn text="Artist" />
      </View>
    </View>
  );
};

export default Register;
