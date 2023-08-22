import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

interface SimpleInputProps {
  placeholder: string;
}
const SimpleInput = ({placeholder}: SimpleInputProps) => {
  const {t} = useTranslation();
  const [value, setValue] = useState('');
  const translatedPlaceholder = t(placeholder) || placeholder;
  return (
    <TextInput
      style={styles.input}
      placeholder={translatedPlaceholder}
      value={value}
      onChangeText={text => setValue(text)}
    />
  );
};

export default SimpleInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: '#E7E7E7',
    borderWidth: 1,
  },
});
