import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Info from '../../assets/image/Info';

interface SignUpProps {
  text: string;
}
const SignUpBtn = ({text}: SignUpProps) => {
  const checkVowelConsonant = (text: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = text[0].toLowerCase();
    const result = vowels.includes(firstLetter) ? 'an' : 'a';
    return `${result} ${text}`;
  };
  const redirect = () => {
    //go to SignUp, with registerText props('Music Lovers')
  };
  return (
    <TouchableOpacity onPress={redirect} style={styles.register_btn}>
      <Text style={styles.register_btn_text}>
        Register as {checkVowelConsonant(text)}
      </Text>
      <TouchableOpacity style={styles.register_img}>
        <Info />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SignUpBtn;

const styles = StyleSheet.create({
  register_btn: {
    padding: 16,
    backgroundColor: '#ffe0f5',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  register_btn_text: {
    color: '#FF0090',
    borderRightWidth: 1,
    padding: 5,
    flex: 3,
    borderRightColor: 'rgba(255,0,144,0.1)',
  },
  register_img: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
