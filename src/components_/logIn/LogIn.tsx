import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ForgotPassBtn from '../buttons/ForgotPassBtn';
import SignInBtn from '../buttons/signIn/SignInBtn';
import Input from '../inputs/Input';
import SocialMediaBlock from '../socialMedia/SocialMediaBlock';
import Logo from '../logo/Logo';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {signInSchema} from '../../validation/authValidation';
import {ScreensName} from '../../constants';

interface InputsValues {
  email: boolean;
  password: boolean;
}
const LogIn = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [touched, setTouched] = useState<InputsValues>({
    email: false,
    password: false,
  });
  const onFocusField = (key: string) => {
    setTouched(prev => ({...prev, [key]: true}));
  };
  const onLogin = (parameters: any) => {
    // @ts-ignore
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: ScreensName.LOGGED_IN_STACK,
            params: {
              screen: ScreensName.STREAM,
              params: {
                email: parameters.email,
              },
            },
          },
        ],
      }),
    );
  };

  return (
    <View style={styles.main_container}>
      <Logo />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount={true}
        validationSchema={signInSchema}
        onSubmit={onLogin}>
        {({values, isValid, errors, setFieldValue}) => (
          <View>
            <View>
              <Input
                onChange={text => setFieldValue('email', text)}
                value={values.email}
                error={touched.email && errors.email}
                onFocus={() => onFocusField('email')}
                placeholder="loginPlaceholder"
              />
              <Input
                security={true}
                onChange={text => setFieldValue('password', text)}
                value={values.password}
                error={touched.password && errors.password}
                placeholder="password"
                onFocus={() => onFocusField('password')}
              />
            </View>
            <ForgotPassBtn />
            <View style={styles.logIn_wrap}>
              <SignInBtn
                values={values}
                disabled={!isValid}
                handleSubmit={onLogin}
              />
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.logIn_wrap}>
        <Text style={styles.signWith}>{t('signInWith')}</Text>
      </View>
      <SocialMediaBlock />
      <View />
    </View>
  );
};

export default LogIn;
