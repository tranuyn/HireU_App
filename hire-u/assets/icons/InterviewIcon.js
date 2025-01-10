import * as React from "react"
import Svg, { Path } from "react-native-svg"

const InterviewIcon = ({ color, size }) => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 35 35"
  >
    <Path
      fill={color}
      stroke={color}
      d="M11.375 21.375a.375.375 0 0 1 0-.75h12.25a.375.375 0 0 1 0 .75h-12.25Zm0 4.375a.375.375 0 0 1 0-.75h12.25a.375.375 0 0 1 0 .75h-12.25Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M19.574 1.75H7.875A2.625 2.625 0 0 0 5.25 4.375v26.25a2.625 2.625 0 0 0 2.625 2.625h19.25a2.625 2.625 0 0 0 2.625-2.625V12.604c0-.658-.247-1.29-.691-1.775L21.509 2.6a2.626 2.626 0 0 0-1.935-.85ZM7 4.375a.875.875 0 0 1 .875-.875h11.699a.875.875 0 0 1 .645.284l7.55 8.228c.148.161.23.372.231.591v18.022a.875.875 0 0 1-.875.875H7.875A.875.875 0 0 1 7 30.625V4.375Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.125 3.675V11.9h8.225"
    />
    <Path
      fill={color}
      d="M14.235 10.733a1.87 1.87 0 0 0 1.924-1.867 1.868 1.868 0 1 0-1.924 1.867Z"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M17.965 14.777c0-1.984-1.67-3.421-3.732-3.421-2.062 0-3.733 1.435-3.733 3.421v.934a.623.623 0 0 0 .623.622h6.221a.623.623 0 0 0 .621-.621v-.935Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default InterviewIcon