import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import SignVisibleBtn from '../../buttons/SignVisibleBtn';
import {styles} from '../styles';

interface SpecialInputProps {
  placeholder: string;
  inputStyle?: ViewStyle;
  inputName?: string;
}
const SpecialInput = ({inputStyle, placeholder}: SpecialInputProps) => {
  const [visible, setVisible] = useState(true);
  const inputErr = '';
  return (
    <View>
      <View style={styles.specialInput_container}>
        <TextInput
          secureTextEntry={visible}
          placeholder={placeholder}
          style={[styles.specialInput, styles.inputs, inputStyle]}
        />
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.passwordVisibleImg}>
          <SignVisibleBtn signVisible={visible} />
        </TouchableOpacity>
      </View>
      {inputErr && <Text>{inputErr}</Text>}
    </View>
  );
};

export default SpecialInput;
