import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const SuccessSvg = () => {
  return (
    <Svg width="81" height="81" viewBox="0 0 81 81" fill="none">
      <Circle cx="40.1689" cy="40.3633" r="39.5" stroke="#99D4AD" />
      <Circle cx="40.1689" cy="40.3633" r="35" fill="#EDFFF3" />
      <Path
        d="M32.1689 41.6133L40.0856 49.1133L52.1689 35.3633"
        stroke="#6FAD84"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SuccessSvg;
