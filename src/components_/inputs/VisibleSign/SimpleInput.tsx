import React from 'react';
import {TextInput, ViewStyle} from 'react-native';
import {styles} from '../styles';

interface SimpleInputProps {
  placeholder: string;
  inputStyles?: ViewStyle;
}
const SimpleInput = ({placeholder, inputStyles}: SimpleInputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.loginInput, styles.inputs, inputStyles]}
    />
  );
};

export default SimpleInput;
