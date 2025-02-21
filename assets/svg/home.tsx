import * as svg from "react-native-svg";
const SvgComponent = ({ color, ...props }: { color: string }) => (
  <svg.Svg width="24" height="26" viewBox="0 0 24 26" fill="none" {...props}>
    <svg.Path
      d="M5 22.9286V15L10 16.0714V24L5 22.9286Z"
      stroke={color}
      stroke-linejoin="round"
    />
    <svg.Path
      d="M23 18.3659V8L14 13.8049V25L23 18.3659Z"
      stroke={color}
      stroke-linejoin="round"
    />
    <svg.Path
      d="M1 10.9767V22.2791L14 25V13.6977L7.5 7L1 10.9767Z"
      stroke={color}
      stroke-linejoin="round"
    />
    <svg.Path
      d="M16.4737 1L7.5 7L13.7368 14L23 7.93333L16.4737 1Z"
      stroke={color}
      stroke-linejoin="round"
    />
  </svg.Svg>
);
export default SvgComponent;
