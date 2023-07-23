import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {AgreeSignSVG} from '../../assets/image';

interface ChooseBtnProps {
  isChecked: boolean;
}
const ChooseBtn = ({isChecked}: ChooseBtnProps) => {
  const [state, setState] = useState(isChecked);
  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      {state ? <AgreeSignSVG /> : null}
    </TouchableOpacity>
  );
};

export default ChooseBtn;
