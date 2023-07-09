import React from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import PasswordVisibleBtn from '../../buttons/PasswordVisibleBtn';
import {styles} from '../styles';

interface SpecialInputProps {
  placeholder: string;
  inputStyle?: ViewStyle;
}
const SpecialInput = ({inputStyle, placeholder}: SpecialInputProps) => {
  return (
    <View style={styles.specialInput_container}>
      <TextInput
        placeholder={placeholder}
        style={[styles.specialInput, styles.inputs, inputStyle]}
      />
      <PasswordVisibleBtn />
    </View>
  );
};

export default SpecialInput;
