import { Image, Pressable, Text, View } from "react-native";
import ThemedText from "./ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/assets/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

// import { useAudioPlayer } from "expo-audio";

type CardDetials = {
  cardNumber: string;
  expiry: string;
  cvv: string;
};

function BarText({
  text,
  renderBar = true,
}: {
  text: string;
  renderBar?: boolean;
}) {
  return (
    <View>
      <Text
        style={{
          color: COLORS.white,
          fontFamily: "GuardianAngle",
          fontSize: 14,
          lineHeight: 21,
        }}
      >
        {text}
      </Text>
      {renderBar && (
        <Image
          source={require("@/assets/images/bar.png")}
          style={{ position: "absolute", transform: [{ translateX: "-10%" }] }}
        />
      )}
    </View>
  );
}

function CardInner({
  CardDetails,
  isBlured,
}: {
  CardDetails: CardDetials;
  isBlured?: boolean;
}) {
  const { cardNumber, expiry } = CardDetails;
  const [n1, n2, n3, n4] = cardNumber.split(" ");

  const blur = useSharedValue(0);

  useEffect(() => {
    if (isBlured) {
      blur.value = withTiming(10);
    } else {
      blur.value = withTiming(0);
    }
  }, [isBlured]);

  const stylz = useAnimatedStyle(() => ({
    filter: [{ blur: blur.value }],
  }));

  return (
    <View>
      <Animated.View
        style={[
          {
            padding: 14,
            justifyContent: "space-between",
            height: "100%",
          },
          stylz,
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={require("../assets/images/yolo.png")} />
          <Image source={require("../assets/images/bank_logo.png")} />
        </View>
        <View style={{ gap: 37 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingHorizontal: 14, gap: 5 }}>
              <BarText text={n1} />
              <BarText text={n2} />
              <BarText text={n3} />
              <BarText text={n4} renderBar={false} />
            </View>
            <View style={{ justifyContent: "space-between" }}>
              <View>
                <ThemedText
                  style={{
                    fontSize: 10,
                    lineHeight: 15,
                    color: COLORS["white-50"],
                  }}
                >
                  expiry
                </ThemedText>
                <ThemedText style={{ fontSize: 14, lineHeight: 21 }}>
                  {expiry}
                </ThemedText>
              </View>
              <View>
                <ThemedText
                  style={{
                    fontSize: 10,
                    lineHeight: 15,
                    color: COLORS["white-50"],
                  }}
                >
                  cvv
                </ThemedText>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8.3,
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    source={require("@/assets/images/3star.png")}
                  />
                  <Image
                    width={100}
                    height={100}
                    source={require("@/assets/images/eye_off.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image source={require("../assets/images/copy.png")} />
              <ThemedText style={{ color: COLORS.primary }}>
                copy details
              </ThemedText>
            </Pressable>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
          <Image source={require("../assets/images/rupay.png")} />
        </View>
      </Animated.View>
    </View>
  );
}

const audioSource = require("../assets/sound/freeze.mp3");

function FreezeEffect({ isFreezed }: { isFreezed?: boolean }) {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const blur = useSharedValue(10);

  // const player = useAudioPlayer(audioSource);

  useEffect(() => {
    async function run() {
      if (isFreezed) {
        scale.value = withTiming(1);
        opacity.value = withTiming(0.5);
        blur.value = withTiming(0, { duration: 1000 });

        // await player.play();
      } else {
        scale.value = withTiming(1.3);
        opacity.value = withTiming(0);
        blur.value = withTiming(30);
        // await player.pause();
      }
    }

    run();
  }, [isFreezed]);

  const stylz = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
    filter: [{ blur: blur.value }],
  }));

  return (
    <View style={{ position: "absolute" }}>
      <View style={{ position: "absolute" }}>
        <Animated.Image
          source={require("../assets/images/card_freeze_overlay.png")}
          style={[stylz]}
        />
      </View>
      <View style={{ position: "absolute" }}>
        <Image source={require("../assets/images/color_overlay_card.png")} />
      </View>
    </View>
  );
}

function Card({
  CardDetails,
  isFreezed,
}: {
  CardDetails: CardDetials;
  isFreezed?: boolean;
}) {
  return (
    <View
      style={{
        width: 186,
        height: 296,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <View style={{ position: "absolute" }}>
        <Image source={require("../assets/images/card_bg.png")} />
      </View>
      <LinearGradient
        colors={["transparent", isFreezed ? "transparent" : COLORS.black]}
        style={{
          borderRadius: 10,
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            borderRadius: 10,
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assets/images/color_overlay_card.png")}
          />
        </View>
        <View>
          <CardInner CardDetails={CardDetails} isBlured={isFreezed} />
        </View>
      </LinearGradient>
      <FreezeEffect isFreezed={isFreezed} />
    </View>
  );
}

export default Card;
