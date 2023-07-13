import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AgreeSign from '../../assets/image/AgreeSign';

interface AgreeBtnProps {
  label: string;
  onChange: () => void;
  value: boolean;
}
const AgreeBtn = ({label, onChange, value}: AgreeBtnProps) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onChange}>
      {value ? <AgreeSign /> : <View style={styles.checkbox} />}
      <Text style={styles.label}>I agree with {label}</Text>
    </TouchableOpacity>
  );
};

export default AgreeBtn;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    backgroundColor: 'white',
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});
