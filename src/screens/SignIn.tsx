import React from 'react';
import BackBtn from '../components_/buttons/BackBtn';
import LogIn from '../components_/logIn/LogIn';
import Register from '../components_/registration/Register';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import {LeftArrowSVG} from '../assets/image';

const SignIn = () => {
  return (
    <ScrollView style={styles.app_container}>
      <BackBtn component={<LeftArrowSVG />} />
      <LogIn />
      <Register />
    </ScrollView>
  );
};

export default SignIn;
