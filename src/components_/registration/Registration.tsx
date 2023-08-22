import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../inputs/Input';
import DropDownInput from '../inputs/dropDownInput/DropDownInput';
import AgreeBtn from '../checkBox/AgreeBtn';
import {Formik, FormikValues} from 'formik';
import {signUpSchema} from '../../validation/authValidation';
import RegisterBtn from '../buttons/register/RegisterBtn';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {
  LoggedInTypeNavigation,
  NavigationProp,
  ScreensName,
} from '../../constants';

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
  const handleSubmit = (parameters: InputsValues) => {
    navigation.navigate(ScreensName.TAB_BAR_STACK, {
      screen: ScreensName.TAB_BAR_STACK,
      // @ts-ignore
      params: {
        name: parameters.name,
      },
    });
  };
  return (
    <View>
      <Formik
        initialValues={{
          username: '',
          password: '',
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
              <Input
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
              <Input
                onChange={text => setFieldValue('name', text)}
                value={values.name}
                error={touched.name && errors.name}
                placeholder="name"
                onFocus={() => onFocusField('name')}
              />
              <Input
                placeholder="email"
                onChange={text => setFieldValue('email', text)}
                value={values.email}
                error={touched.email && errors.email}
                onFocus={() => onFocusField('email')}
              />
              <DropDownInput />
            </View>
            <View style={styles.input_block}>
              <Text>
                {t('account')} {t('security')}
              </Text>
              <Input
                security={true}
                onChange={text => setFieldValue('password', text)}
                value={values.password}
                error={touched.password && errors.password}
                placeholder="password"
                onFocus={() => onFocusField('password')}
              />
              <Input
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

const styles = StyleSheet.create({
  registration_block: {
    gap: 30,
  },
  input_block: {
    gap: 15,
    color: '#00000047',
  },
});
