import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

const AgreeSign = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Rect width="22" height="22" rx="5" fill="#FF0090" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4485 7.82355C16.8095 8.17868 16.8142 8.75922 16.4591 9.1202L10.7754 14.8974C10.6043 15.0713 10.3709 15.1699 10.127 15.1713C9.88302 15.1727 9.64857 15.0768 9.47551 14.9048L6.01176 11.4633C5.65253 11.1063 5.65067 10.5258 6.00759 10.1666C6.36451 9.80734 6.94506 9.80548 7.30428 10.1624L10.1144 12.9545L15.1518 7.83413C15.507 7.47314 16.0875 7.46841 16.4485 7.82355Z"
        fill="white"
      />
    </Svg>
  );
};

export default AgreeSign;
