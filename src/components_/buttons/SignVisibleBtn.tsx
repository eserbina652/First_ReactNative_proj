import React from 'react';
import {SecurityOffSVG, SecurityOnSVG} from '../../assets/image';
interface SignVisibleBtn {
  signVisible: boolean;
}
const SignVisibleBtn = ({signVisible}: SignVisibleBtn) => {
  return <>{signVisible ? <SecurityOffSVG /> : <SecurityOnSVG />}</>;
};

export default SignVisibleBtn;
