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
      .min(6, '* min 6 symbols')
      .matches(
        emailRegexp,
        'email must contain @ and can\'t contain: <, >, [, ], :, ;, " ',
      )
      .required('required'),
    username: Yup.string()
      .min(4, '* min 4 symbols')
      .max(12, '* max 12 symbols')
      .matches(usernameRegexp, 'username must contain only letters and numbers')
      .required('required'),
    name: Yup.string()
      .min(2, 'Too Short, name must contain not less then 2 symbols!')
      .max(15, 'Too Long, name must contain not more then 15 symbols!')
      .matches(nameRegexp, 'name must contain only letters')
      .required('required'),
    password: Yup.string()
      .min(8, 'Too Short, password must contain not less then 8 symbols!')
      .max(20, 'Too Long, password must contain not more then 20 symbols!')
      .matches(
        passRegexp,
        'Password must contain letters(A-z), numbers, special symbols',
      )
      .required('required'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), 'Your passwords do not match.'],
      'Passwords must match',
    ),
    agreeFirst: Yup.boolean()
      .required('required')
      .oneOf([true], 'The terms and conditions must be accepted.'),
    agreeSecond: Yup.boolean()
      .required('required')
      .oneOf([true], 'The terms and conditions must be accepted.'),
  })
  .required();
