import * as svg from "react-native-svg";
const SvgComponent = ({ color, ...props }: { color: string }) => (
  <svg.Svg width={22} height={22} {...props}>
    <svg.Mask id="a" fill={color}>
      <svg.Path d="M7 20H3a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2Zm14-6a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1ZM19 0h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v4a1 1 0 0 0 2 0V3a3 3 0 0 0-3-3ZM1 8a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1h4a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v4a1 1 0 0 0 1 1Zm8-4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM8 8H6V6h2v2Zm5 2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm1-4h2v2h-2V6Zm-5 6H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4H6v-2h2v2Zm5-1a1 1 0 0 0 1-1 1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg.Mask>
    <svg.Path
      fill={color}
      stroke="#0D0D0D"
      strokeWidth={0.4}
      d="M7 20H3a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2Zm14-6a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1ZM19 0h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v4a1 1 0 0 0 2 0V3a3 3 0 0 0-3-3ZM1 8a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1h4a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v4a1 1 0 0 0 1 1Zm8-4H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM8 8H6V6h2v2Zm5 2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm1-4h2v2h-2V6Zm-5 6H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4H6v-2h2v2Zm5-1a1 1 0 0 0 1-1 1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      mask="url(#a)"
    />
  </svg.Svg>
);
export default SvgComponent;
