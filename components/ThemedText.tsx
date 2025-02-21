import { StyleProp, Text, TextStyle } from "react-native";

function ThemedText({
  children,
  textWeight,
  style,
  ...props
}: {
  children: string;
  textWeight?: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text
      {...props}
      style={[
        { color: "white", fontFamily: "Poppins-" + (textWeight || "Regular") },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export default ThemedText;
