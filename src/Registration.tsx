import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SimpleInput from './components_/inputs/VisibleSign/SimpleInput';
import DropDownInput from './components_/inputs/dropDownInput/DropDownInput';
import SpecialInput from './components_/inputs/UnvisibleSign/SpecialInput';
import AgreeBtn from './components_/checkBox/AgreeBtn';
import {Formik} from 'formik';
import {signInSchema} from './validation/authValidation';
import RegisterBtn from './components_/buttons/RegisterBtn';
const Registration = () => {
  const [touched, setTouched] = useState({
    username: false,
    password: false,
    passwordConfirmation: false,
    name: false,
    email: false,
  });
  const onFocusField = (key: string) => {
    setTouched(prev => ({...prev, [key]: true}));
  };
  const handleSubmit = () => {
    // Handle form submission
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
        validationSchema={signInSchema}
        onSubmit={handleSubmit}>
        {({values, isValid, errors, setFieldValue, handleSubmit}) => (
          <View style={styles.registration_block}>
            <View style={styles.input_block}>
              <Text>Public Information</Text>
              <SimpleInput
                onChange={text => setFieldValue('username', text)}
                value={values.username}
                error={touched.username && errors.username}
                placeholder="username"
                onFocus={() => onFocusField('username')}
              />
            </View>
            <View style={styles.input_block}>
              <Text>Private Information</Text>
              <SimpleInput
                onChange={text => setFieldValue('name', text)}
                value={values.name}
                error={touched.name && errors.name}
                placeholder="name"
                onFocus={() => onFocusField('name')}
              />
              <SimpleInput
                placeholder="email"
                onChange={text => setFieldValue('email', text)}
                value={values.email}
                error={touched.email && errors.email}
                onFocus={() => onFocusField('email')}
              />
              <DropDownInput />
            </View>
            <View style={styles.input_block}>
              <Text>Account Security</Text>
              <SpecialInput
                onChange={text => setFieldValue('password', text)}
                value={values.password}
                error={touched.password && errors.password}
                placeholder="password"
              />
              <SpecialInput
                onChange={text => setFieldValue('passwordConfirmation', text)}
                value={values.passwordConfirmation}
                error={
                  touched.passwordConfirmation && errors.passwordConfirmation
                }
                placeholder="Re-enter your Password"
              />
              <AgreeBtn
                onChange={() => setFieldValue('agreeFirst', !values.agreeFirst)}
                value={values.agreeFirst}
                label="Terms and Conditions"
              />
              <AgreeBtn
                onChange={() =>
                  setFieldValue('agreeSecond', !values.agreeSecond)
                }
                value={values.agreeSecond}
                label="Privacy Policy"
              />
            </View>
            <RegisterBtn disabled={!isValid} handleSubmit={handleSubmit} />
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
