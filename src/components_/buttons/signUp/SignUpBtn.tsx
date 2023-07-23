import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {InfoSVG} from '../../../assets/image';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {
  LoggedOutTypeNavigation,
  NavigationProp,
  ScreensName,
} from '../../../constants';

interface SignUpProps {
  text: string;
}
const SignUpBtn = ({text}: SignUpProps) => {
  const {t} = useTranslation();
  const navigation =
    useNavigation<NavigationProp<LoggedOutTypeNavigation, string>>();

  const redirect = () => {
    navigation.navigate(ScreensName.SIGN_UP, {registerAs: text});
  };
  return (
    <TouchableOpacity onPress={redirect} style={styles.register_btn}>
      <Text style={styles.register_btn_text}>
        {t('registerAs')} {text}
      </Text>
      <TouchableOpacity style={styles.register_img}>
        <InfoSVG />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SignUpBtn;
