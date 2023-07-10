import React from 'react';
import PasswordUnVisible from '../../assets/image/PasswordUnVisible';
import PasswordVisible from '../../assets/image/PasswordVisible';
interface SignVisibleBtn {
  signVisible: boolean;
}
const SignVisibleBtn = ({signVisible}: SignVisibleBtn) => {
  return <>{signVisible ? <PasswordVisible /> : <PasswordUnVisible />}</>;
};

export default SignVisibleBtn;
