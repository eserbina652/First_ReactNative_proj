import React from 'react';
import {Rect, Svg} from 'react-native-svg';

const BurgerMenuSvg = () => {
  return (
    <Svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <Rect width="18" height="1.8" rx="0.9" fill="white" fill-opacity="0.52" />
      <Rect
        y="8"
        width="18"
        height="1.8"
        rx="0.9"
        fill="white"
        fill-opacity="0.52"
      />
    </Svg>
  );
};

export default BurgerMenuSvg;
