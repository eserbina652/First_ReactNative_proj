import React, {useState} from 'react';
import {View} from 'react-native';
import SignInBtn from '../buttons/register/SignInBtn';
import Input from '../inputs/Input';
import Logo from '../logo/Logo';
import {styles} from './styles';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Formik, FormikValues} from 'formik';
import {signInSchema} from '../../validation/authValidation';
import {ScreensName} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface InputsValues {
  email: boolean;
  password: boolean;
}
const LogIn = () => {
  const navigation = useNavigation();
  const [touched, setTouched] = useState<InputsValues>({
    email: false,
    password: false,
  });
  const onFocusField = (key: string) => {
    setTouched(prev => ({...prev, [key]: true}));
  };
  const onLogin = async (parameters: any) => {
    try {
      const loginData = {
        email: parameters.email,
        password: parameters.password,
      };
      await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
      const loginDataGet = await AsyncStorage.getItem('loginData');
      console.log('DATA FROM LOGIN', loginDataGet);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: ScreensName.LOGGED_IN_STACK,
              params: {
                screen: ScreensName.DRAWER_STACK,
                params: {
                  email: parameters.email,
                },
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
