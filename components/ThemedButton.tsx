import { Pressable } from "react-native";
import ThemedText from "./ThemedText";
import { COLORS } from "@/assets/colors";
import { LinearGradient } from "expo-linear-gradient";

function ThemedButton({
  title,
  variant,
  ...props
}: {
  title: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <>
      <LinearGradient
        colors={[
          variant == "primary" ? COLORS.primary : COLORS.white,
          "transparent",
        ]}
        style={{ height: 40, borderRadius: 40 }}
      >
        <Pressable
          {...props}
          style={{
            backgroundColor: COLORS.black,
            flex: 1,
            padding: 8,
            margin: 1,
            borderRadius: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedText
            textWeight="Medium"
            style={{
              minHeight: 24,
              minWidth: 80,
              textAlign: "center",
              color: variant == "primary" ? COLORS.primary : COLORS.white,
            }}
          >
            {title}
          </ThemedText>
        </Pressable>
      </LinearGradient>
    </>
  );
}

export default ThemedButton;
