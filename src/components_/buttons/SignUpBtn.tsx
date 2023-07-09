import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {info} from '../../assets';

interface SignUpProps {
  text: string;
}
const SignUpBtn = ({text}: SignUpProps) => {
  return (
    <TouchableOpacity style={styles.register_btn}>
      <Text style={styles.register_btn_text}>{text}</Text>
      <Image style={styles.register_btn_img} source={info} />
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
  register_btn_img: {
    width: 16,
    height: 16,
  },
});
