import { Button, Text, View, ViewStyle } from "react-native";
import ThemedText from "../components/ThemedText";
import { COLORS } from "@/assets/colors";
import ThemedButton from "@/components/ThemedButton";
import BottomTab from "@/components/BottomTab";
import CardView from "@/components/CardView";

function UpTabButtons({ style }: { style?: ViewStyle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        ...style,
      }}
    >
      <ThemedButton title="pay" />
      <ThemedButton title="card" variant="primary" />
    </View>
  );
}

export default function Index() {
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.black,
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <ThemedText textWeight="Bold" style={{ marginTop: 26, fontSize: 24 }}>
          select payment mode
        </ThemedText>
        <ThemedText
          textWeight="Medium"
          style={{
            marginTop: 16,
            fontSize: 14,
            lineHeight: 21,
            letterSpacing: -0.17,
            color: COLORS["white-50"],
          }}
        >
          choose your preferred payment method to make payment.
        </ThemedText>
        <UpTabButtons style={{ marginTop: 24 }} />
        <ThemedText
          style={{
            textTransform: "uppercase",
            lineHeight: 18,
            fontSize: 12,
            marginTop: 48,
            letterSpacing: 0.17,
            opacity: 0.2,
          }}
          textWeight="Medium"
        >
          your digital debit card
        </ThemedText>
        <View style={{ marginTop: 16 }}>
          <CardView />
        </View>
      </View>
      <BottomTab />
    </>
  );
}
