import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface FavoritesSVGProps {
  color: string;
  width?: number;
  height?: number | string;
}
const FavoritesSvg = ({
  color = '#7E7E7E',
  height = 18,
  width = 19,
}: FavoritesSVGProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
      <Path
        d="M9.26224 1.15881C9.33707 0.928486 9.66293 0.928486 9.73776 1.15881L11.1441 5.48708C11.3784 6.20812 12.0503 6.6963 12.8085 6.6963H17.3595C17.6016 6.6963 17.7023 7.00621 17.5064 7.14856L13.8246 9.82358C13.2112 10.2692 12.9546 11.0591 13.1888 11.7801L14.5952 16.1084C14.67 16.3387 14.4064 16.5303 14.2105 16.3879L10.5286 13.7129C9.91527 13.2673 9.08473 13.2673 8.47138 13.7129L4.78953 16.3879C4.5936 16.5303 4.32998 16.3387 4.40482 16.1084L5.81116 11.7801C6.04544 11.0591 5.78879 10.2692 5.17543 9.82358L1.49359 7.14856C1.29766 7.00621 1.39835 6.6963 1.64053 6.6963H6.19155C6.94969 6.6963 7.62162 6.20812 7.8559 5.48708L9.26224 1.15881Z"
        stroke={color}
        stroke-width="1.5"
      />
    </Svg>
  );
};

export default FavoritesSvg;
