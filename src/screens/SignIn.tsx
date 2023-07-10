import React from 'react';
import BackBtn from '../components_/buttons/BackBtn';
import LeftArrow from '../assets/image/LeftArrow';
import LogIn from '../components_/signIn/LogIn';
import Registration from '../components_/signUp/Registration';
import {ScrollView, StyleSheet} from 'react-native';

const SignIn = () => {
  return (
    <ScrollView style={styles.app_container}>
      <BackBtn component={<LeftArrow />} />
      <LogIn />
      <Registration />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFF0F9',
    // paddingBottom: 350,
  },
});
