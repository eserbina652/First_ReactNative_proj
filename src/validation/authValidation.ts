// @ts-ignore
import * as Yup from 'yup';

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const usernameRegexp = /^[a-zA-Z0-9_-]{4,12}$/;
const nameRegexp = /^[A-Za-z]{2,15}$/;
const passRegexp =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const signInSchema = Yup.object()
  .shape({
    email: Yup.string()
      .min(6, 'emailMin')
      .matches(emailRegexp, 'emailMatches')
      .required('required'),
    password: Yup.string()
      .min(8, 'passwordMin')
      .max(20, 'passwordMax')
      .matches(passRegexp, 'passwordMatches')
      .required('required'),
  })
  .required();
export const signUpSchema = Yup.object()
  .shape({
    email: Yup.string()
      .min(6, 'emailMin')
      .matches(emailRegexp, 'emailMatches')
      .required('required'),
    username: Yup.string()
      .min(4, 'userNameMin')
      .max(12, 'userNameMax')
      .matches(usernameRegexp, 'userNameMatches')
      .required('required'),
    name: Yup.string()
      .min(2, 'nameMin')
      .max(15, 'nameMax')
      .matches(nameRegexp, 'nameMatches')
      .required('required'),
    password: Yup.string()
      .min(8, 'passwordMin')
      .max(20, 'passwordMax')
      .matches(passRegexp, 'passwordMatches')
      .required('required'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), 'passConfirmNOT'],
      'passConfirmMessage',
    ),
    agreeFirst: Yup.boolean().required('required').oneOf([true], 'agree'),
    agreeSecond: Yup.boolean().required('required').oneOf([true], 'agree'),
  })
  .required();
