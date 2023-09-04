import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './modals';
interface SimpleBtnProps {
  text: string;
}
const SimpleBtn = ({text}: SimpleBtnProps) => {
  const onClick = () => {
    //do something
  };
  return (
    <TouchableOpacity style={styles.active_btn} onPress={onClick}>
      <Text style={styles.login_btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SimpleBtn;
