import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {InfoSVG} from '../../../assets/image';

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
        <InfoSVG />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SignUpBtn;
