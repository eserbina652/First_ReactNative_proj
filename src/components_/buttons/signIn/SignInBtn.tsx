import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const SignInBtn = () => {
  return (
    <TouchableOpacity style={styles.logIn_btn}>
      <Text style={styles.login_btn_text}>Log In</Text>
    </TouchableOpacity>
  );
};

export default SignInBtn;
