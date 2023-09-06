import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SImpleInput from '../inputs/SImpleInput';
import DropDownInput from '../inputs/DropDownInput';
import AgreeBtn from '../buttons/checkBox/AgreeBtn';
import {Formik, FormikValues} from 'formik';
import {signUpSchema} from '../../validation/authValidation';
import RegisterBtn from '../buttons/accountManage/signIn_signUp/RegisterBtn';
import {useTranslation} from 'react-i18next';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  LoggedInTypeNavigation,
  NavigationProp,
  ScreensName,
} from '../../constants';
import {styles} from './styles';
import EncryptedStorage from 'react-native-encrypted-storage';
import {countries} from '../../api/data/dropdownData';

interface TouchedInputsValues {
  username: boolean;
  password: boolean;
  passwordConfirmation: boolean;
  name: boolean;
  email: boolean;
}

interface InputsValues {
  username: string;
  password: string;
  reTypePass: string;
  name: string;
  email: string;
  passwordConfirmation: string;
  agreeSecond: boolean;
  agreeFirst: boolean;
  country: string;
}
const Registration = () => {
  const {t} = useTranslation();
  const navigation =
    useNavigation<NavigationProp<LoggedInTypeNavigation, string>>();
  const [touched, setTouched] = useState<TouchedInputsValues>({
    username: false,
    password: false,
    passwordConfirmation: false,
    name: false,
    email: false,
  });
  const onFocusField = (key: string) => {
    setTouched(prev => ({...prev, [key]: true}));
  };
  const handleSubmit = async (parameters: InputsValues) => {
    try {
      const registerData = {
        username: parameters.username,
        name: parameters.name,
        email: parameters.email,
        country: parameters.country,
      };
      await EncryptedStorage.setItem(
        'registerData',
        JSON.stringify(registerData),
      );
      // userProfileData.push(registerData);
      const registerDataGet = await EncryptedStorage.getItem('registerData');
      console.log('DATA FROM LOGIN', registerDataGet);
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
      console.log('Error occurred by registration', e);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          username: '',
          password: '',
          country: '',
          reTypePass: '',
          name: '',
          email: '',
          passwordConfirmation: '',
          agreeSecond: false,
          agreeFirst: false,
        }}
        validateOnMount={true}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}>
        {({
          values,
          isValid,
          errors,
          setFieldValue,
          handleSubmit,
        }: FormikValues) => (
          <View style={styles.registration_block}>
            <View style={styles.input_block}>
              <Text>
                {t('public')} {t('information')}
              </Text>
              <SImpleInput
                onChange={text => setFieldValue('username', text)}
                value={values.username}
                error={touched.username && errors.username}
                placeholder="username"
                onFocus={() => onFocusField('username')}
              />
            </View>
            <View style={styles.input_block}>
              <Text>
                {t('private')} {t('information')}
              </Text>
              <SImpleInput
                onChange={text => setFieldValue('name', text)}
                value={values.name}
                error={touched.name && errors.name}
                placeholder="name"
                onFocus={() => onFocusField('name')}
              />
              <SImpleInput
                placeholder="email"
                onChange={text => setFieldValue('email', text)}
                value={values.email}
                error={touched.email && errors.email}
                onFocus={() => onFocusField('email')}
              />
              <DropDownInput
                onChange={setFieldValue}
                currentOption={values.country}
              />
            </View>
            <View style={styles.input_block}>
              <Text>
                {t('account')} {t('security')}
              </Text>
              <SImpleInput
                security={true}
                onChange={text => setFieldValue('password', text)}
                value={values.password}
                error={touched.password && errors.password}
                placeholder="password"
                onFocus={() => onFocusField('password')}
              />
              <SImpleInput
                security={true}
                onChange={text => setFieldValue('passwordConfirmation', text)}
                value={values.passwordConfirmation}
                error={
                  touched.passwordConfirmation && errors.passwordConfirmation
                }
                placeholder="reEnter"
                onFocus={() => onFocusField('passwordConfirmation')}
              />
              <AgreeBtn
                onChange={() => setFieldValue('agreeFirst', !values.agreeFirst)}
                value={values.agreeFirst}
                label="termsAndConditions"
              />
              <AgreeBtn
                onChange={() =>
                  setFieldValue('agreeSecond', !values.agreeSecond)
                }
                value={values.agreeSecond}
                label="privacyPolicy"
              />
            </View>
            <RegisterBtn
              disabled={!isValid}
              handleSubmit={() => {
                handleSubmit(values);
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Registration;
