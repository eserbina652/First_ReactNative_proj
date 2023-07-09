import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignUpBtn from '../buttons/SignUpBtn';
const SignUp = () => {
  return (
    <View style={styles.footer_container}>
      <Text>Don’t have an account?</Text>
      <View style={styles.register_wrap}>
        <SignUpBtn text="SignUpBtn as a Music Lover" />
        <SignUpBtn text="SignUpBtn as an Artist" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  footer_container: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.12)',
    flex: 0.5,
    gap: 24,
    width: '100%',
    alignItems: 'center',
    paddingTop: 25,
  },
  register_wrap: {
    alignSelf: 'center',
    width: '80%',
    gap: 15,
  },
});
