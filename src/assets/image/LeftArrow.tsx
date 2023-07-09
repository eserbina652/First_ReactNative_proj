import React from 'react';
import {Svg, Path} from 'react-native-svg';

const LeftArrow = () => {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
      <Path
        d="M1 8.57421H16M1 8.57421L7.06361 1.5M1 8.57421L7.06361 15.6484"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
