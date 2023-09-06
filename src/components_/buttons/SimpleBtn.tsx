import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './modals';
interface SimpleBtnProps {
  text: string;
  onPress: () => void;
}
const SimpleBtn = ({text, onPress}: SimpleBtnProps) => {
  return (
    <TouchableOpacity style={styles.active_btn} onPress={onPress}>
      <Text style={styles.login_btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SimpleBtn;
