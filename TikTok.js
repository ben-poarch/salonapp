import * as React from "react";
//import Svg, { Path } from "react-native-svg";
import * as SVG from "react-native-svg";
const { Svg, Path } = SVG;

function TikTok() {
  return (
    <SVG.Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 448 512"
    >
      <SVG.Path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
    </SVG.Svg>
  );
}

export default TikTok;
