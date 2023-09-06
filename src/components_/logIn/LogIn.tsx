import React, {useState} from 'react';
import {View} from 'react-native';
import SignInBtn from '../buttons/accountManage/signIn_signUp/SignInBtn';
import SImpleInput from '../inputs/SImpleInput';
import Logo from '../logo/Logo';
import {styles} from './styles';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Formik, FormikValues} from 'formik';
import {signInSchema} from '../../validation/authValidation';
import {ScreensName} from '../../constants';
import EncryptedStorage from 'react-native-encrypted-storage';

interface InputsTouchedValues {
  email: boolean;
  password: boolean;
}
interface InputsValues {
  email: string;
  password: string;
}

const LogIn = () => {
  const navigation = useNavigation();
  const [touched, setTouched] = useState<InputsTouchedValues>({
    email: false,
    password: false,
  });
  const onFocusField = (key: string) => {
    setTouched(prev => ({...prev, [key]: true}));
  };
  const onLogin = async (parameters: InputsValues) => {
    try {
      const loginData = {
        email: parameters.email,
        password: parameters.password,
      };
      await EncryptedStorage.setItem('loginData', JSON.stringify(loginData));
      // const loginDataGet = await EncryptedStorage.getItem('loginData');
      // if (loginDataGet) {
      //   const parsedLoginData = await JSON.parse(loginDataGet)
      //   const isUser = userProfileData.filter
      // }
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: ScreensName.LOGGED_IN_STACK,
              params: {
                email: parameters.email,
              },
            },
          ],
        }),
      );
    } catch (e) {
      console.log('Error by loginData was happened', e);
    }
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
        {({values, isValid, errors, setFieldValue}: FormikValues) => (
          <View>
            <View>
              <SImpleInput
                onChange={text => setFieldValue('email', text)}
                value={values.email}
                error={touched.email && errors.email}
                onFocus={() => onFocusField('email')}
                placeholder="loginPlaceholder"
              />
              <SImpleInput
                security={true}
                onChange={text => setFieldValue('password', text)}
                value={values.password}
                error={touched.password && errors.password}
                placeholder="password"
                onFocus={() => onFocusField('password')}
              />
            </View>
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
      <View />
    </View>
  );
};

export default LogIn;
