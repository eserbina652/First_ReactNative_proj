import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface ForecastSVGProps {
  color: string;
  width?: number;
  height?: number | string;
}
const ForecastSvg = ({
  color = '#7E7E7E',
  height = 18,
  width = 28,
}: ForecastSVGProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 18" fill={color}>
      <Path
        d="M1.32324 16.8648L7.61974 9.08677C8.34541 8.19036 9.71254 8.19037 10.4382 9.08677L15.1118 14.86C15.9018 15.836 17.4208 15.7328 18.0716 14.6589L25.8003 1.90662"
        stroke="#9F9F9F"
        stroke-width="1.81311"
      />
      <Path
        d="M21.3498 2.78269L25.5725 1.37533C26.1396 1.18633 26.7312 1.5883 26.7643 2.18514L27 6.43103"
        stroke="#9F9F9F"
        stroke-width="1.81311"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ForecastSvg;
