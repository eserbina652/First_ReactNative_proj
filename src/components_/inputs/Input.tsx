import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './styles';
import SignVisibleBtn from '../buttons/SignVisibleBtn';

interface SimpleInputProps {
  placeholder: string;
  inputStyles?: ViewStyle;
  onChange?: (text: string) => void;
  value?: string;
  error?: boolean | string;
  onFocus?: () => void;
}
const Input = ({
  placeholder,
  inputStyles,
  onChange,
  value,
  error,
  onFocus,
}: SimpleInputProps) => {
  const [visible, setVisible] = useState(true);
  const isSecurity = placeholder.toLowerCase().includes('password');
  console.log(isSecurity, placeholder);
  return (
    <View>
      <View style={isSecurity && styles.specialInput_container}>
        <TextInput
          onFocus={onFocus}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          style={
            isSecurity
              ? [styles.specialInput, styles.inputs, inputStyles]
              : [styles.loginInput, styles.inputs, inputStyles]
          }
          secureTextEntry={isSecurity && visible}
        />
        {isSecurity && (
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={styles.passwordVisibleImg}>
            <SignVisibleBtn signVisible={visible} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.inputErr}>{error}</Text>}
    </View>
  );
};

export default Input;
