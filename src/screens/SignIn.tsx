import React from 'react';
import LogIn from '../components_/logIn/LogIn';
import Register from '../components_/registration/Register';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import ChangeLangBtn from '../components_/buttons/ChangeLangBtn';

const SignIn = () => {
  return (
    <ScrollView style={styles.app_container}>
      <ChangeLangBtn />
      <LogIn />
      <Register />
    </ScrollView>
  );
};

export default SignIn;
