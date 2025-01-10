import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FindJobIcon = ({ color, size }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 35 35"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.052 30.625h-2.045c-5.228 0-7.841 0-9.466-1.655-1.624-1.655-1.624-4.32-1.624-9.647s0-7.992 1.624-9.647c1.625-1.655 4.238-1.655 9.466-1.655h5.546c5.228 0 7.843 0 9.468 1.655 1.25 1.273 1.537 3.144 1.604 6.366"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m29.191 29.2 2.892 2.883m-8.75-24.062-.146-.452c-.722-2.246-1.082-3.369-1.94-4.01-.861-.642-2.002-.642-4.287-.642h-.383c-2.283 0-3.424 0-4.283.641-.86.642-1.221 1.765-1.943 4.01l-.143.453m20.494 17.538a5.143 5.143 0 1 0-10.284-.174 5.143 5.143 0 0 0 10.284.174Z"
      />
    </Svg>
  );
};

export default FindJobIcon;
