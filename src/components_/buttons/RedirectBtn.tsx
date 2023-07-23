import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RightArrowSVG} from '../../assets/image';
import {useNavigation} from '@react-navigation/native';
import {
  NavigationProp,
  UnknownRedirectNavigation,
  ValidScreenNames,
} from '../../constants';

interface RedirectBtnProps {
  redirectTo: ValidScreenNames;
}
const RedirectBtn = ({redirectTo}: RedirectBtnProps) => {
  const navigation =
    useNavigation<
      NavigationProp<UnknownRedirectNavigation, ValidScreenNames>
    >();

  const redirect = () => {
    // @ts-ignore
    navigation.navigate(redirectTo);
  };
  return (
    <TouchableOpacity onPress={redirect}>
      <RightArrowSVG />
    </TouchableOpacity>
  );
};

export default RedirectBtn;
