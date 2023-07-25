import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface SimpleBtnProps {
  text: string;
}
const SimpleBtn = ({text}: SimpleBtnProps) => {
  const onClick = () => {
    //do something
  };
  return (
    <TouchableOpacity onPress={onClick}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default SimpleBtn;
