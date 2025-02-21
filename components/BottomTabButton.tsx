import { Pressable, PressableProps, View } from "react-native";
import ThemedText from "./ThemedText";
import { COLORS } from "@/assets/colors";
import { LinearGradient } from "expo-linear-gradient";

function BottomTabButton({
  title,
  isActive = false,
  Logo,
  size = "sm",
  color,
  ...props
}: {
  title: string;
  isActive?: boolean;
  size?: "lg" | "sm";
  color?: "primary" | "secondary";
  Logo: any;
  onPress?: () => any;
}) {
  const ButtonSize = size == "lg" ? 58 : isActive ? 51 : 41;
  const MainColor =
    color == "primary"
      ? COLORS.primary
      : color
        ? COLORS.white
        : isActive
          ? COLORS.white
          : COLORS["white-50"];

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: ButtonSize,
        height: ButtonSize,
      }}
    >
      <LinearGradient
        colors={[MainColor, "transparent"]}
        style={{ width: ButtonSize, height: ButtonSize, borderRadius: 40 }}
      >
        <Pressable
          {...props}
          style={{
            backgroundColor: COLORS.black,
            flex: 1,
            margin: 1,
            borderRadius: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            style={{ borderRadius: 5 }}
            colors={[isActive ? COLORS.white : "transparent", "transparent"]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.5 }}
          >
            <Logo style={{ padding: 10 }} color={MainColor} />
          </LinearGradient>
        </Pressable>
      </LinearGradient>
      <ThemedText
        textWeight="Medium"
        style={{
          fontSize: 12,
          lineHeight: 18,
          letterSpacing: -0.17,
          marginTop: size == "lg" ? 6 : 5,
          minHeight: 24,
          minWidth: 80,
          textAlign: "center",
          color: MainColor,
        }}
      >
        {title}
      </ThemedText>
    </View>
  );
}

export default BottomTabButton;
