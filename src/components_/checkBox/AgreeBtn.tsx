import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AgreeSign from '../../assets/image/AgreeSign';

interface AgreeBtnProps {
  label: string;
}
const AgreeBtn = ({label}: AgreeBtnProps) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
      {checked ? <AgreeSign /> : <View style={styles.checkbox} />}
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
