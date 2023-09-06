import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

interface SimpleInputProps {
  placeholder: string;
  inputValue?: string;
  onChange: (key: string, text: string) => void;
}
const ProfileInput = ({
  placeholder,
  inputValue,
  onChange,
}: SimpleInputProps) => {
  const {t} = useTranslation();
  const translatedPlaceholder = t(placeholder) || placeholder;

  return (
    <TextInput
      // numberOfLines={2}
      style={styles.input}
      placeholder={translatedPlaceholder}
      value={inputValue}
      onChangeText={text => onChange(placeholder, text)}
    />
  );
};

export default ProfileInput;

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
