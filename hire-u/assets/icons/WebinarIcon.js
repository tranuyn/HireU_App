import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WebinarIcon = ({ color, size }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 28 28"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.875}
        d="m17.125 26.5-.395-.524c-.888-1.18-1.109-2.983-.546-4.476m-5.309 5 .395-.524c.888-1.18 1.109-2.983.546-4.476m-4.066 5h12.5m-3.75-25h-5c-4.1 0-6.149 0-7.601 1.018a5.625 5.625 0 0 0-1.381 1.38C1.5 5.35 1.5 7.4 1.5 11.5c0 4.1 0 6.149 1.018 7.601a5.624 5.624 0 0 0 1.38 1.382C5.35 21.5 7.4 21.5 11.5 21.5h5c4.1 0 6.149 0 7.601-1.017a5.622 5.622 0 0 0 1.382-1.382C26.5 17.65 26.5 15.6 26.5 11.5s0-6.149-1.017-7.601A5.624 5.624 0 0 0 24.1 2.518C22.65 1.5 20.6 1.5 16.5 1.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.875}
        d="M9 16.5c2.297-3.244 7.649-3.421 10 0M16.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </Svg>
  );
};

export default WebinarIcon;
