import { Dimensions, StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";
import { COLORS } from "@/assets/colors";
import { LinearGradient } from "expo-linear-gradient";
import BottomTabButton from "./BottomTabButton";

import ScannerIcon from "@/assets/svg/scanner";
import HomeIcon from "@/assets/svg/home";
import GinieIcon from "@/assets/svg/ginie";
import { useState } from "react";

import Animated, { LinearTransition } from "react-native-reanimated";

const { height: ScreenHeight } = Dimensions.get("window");
const LayoutHeight = 128;
const CurveSize = 1000;

function BottomTab() {
  const [active, setActive] = useState(0);

  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          bottom: 0,
          top: ScreenHeight - LayoutHeight,
          zIndex: 100,
          backgroundColor: COLORS.black,
          height: LayoutHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            width: CurveSize,
            height: CurveSize,
            backgroundColor: COLORS.black,
            borderRadius: "100%",
            left: "50%",
            overflow: "hidden",
            transform: [{ translateX: "-50%" }],
          },
        ]}
      >
        <LinearGradient
          colors={[COLORS.white, "transparent"]}
          style={{
            borderRadius: CurveSize,
            width: CurveSize,
            height: LayoutHeight - 70,
          }}
        >
          <View
            style={{
              borderRadius: "100%",
              width: CurveSize,
              height: CurveSize,
              backgroundColor: COLORS.black,
              margin: 1,
            }}
          />
        </LinearGradient>
      </View>
      <Animated.View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "60%",
          height: "auto",
          gap: 8,
          marginTop: 10,
        }}
        layout={LinearTransition}
      >
        <BottomTabButton
          onPress={() => setActive(0)}
          Logo={HomeIcon}
          title="home"
          isActive={active == 0}
        />
        <BottomTabButton
          onPress={() => setActive(1)}
          Logo={ScannerIcon}
          title="yolo pay"
          isActive={active == 1}
        />
        <BottomTabButton
          onPress={() => setActive(2)}
          Logo={GinieIcon}
          title="ginie"
          isActive={active == 2}
        />
      </Animated.View>
    </View>
  );
}

export default BottomTab;
