import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {AgreeSignSVG} from '../../assets/image';

interface AgreeBtnProps {
  label: string;
  onChange: () => void;
  value: boolean;
}
const AgreeBtn = ({label, onChange, value}: AgreeBtnProps) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onChange}>
      {value ? <AgreeSignSVG /> : <View style={styles.checkbox} />}
      <Text style={styles.label}>I agree with {label}</Text>
    </TouchableOpacity>
  );
};

export default AgreeBtn;
