import { View } from "react-native";
import BottomTabButton from "./BottomTabButton";

import FreezeIcon from "../assets/svg/snowflake";
import Card from "./Card";
import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";

export function CardView() {
  const { cardNumber, expiry, cvv } = useMemo(() => {
    return {
      cardNumber: faker.finance.creditCardNumber({
        issuer: "63[7-9]# #### #### ###L",
      }),
      cvv: faker.finance.creditCardCVV(),
      expiry: "12/30",
    };
  }, []);

  const [isFreezed, setFreeze] = useState(true);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 12,
      }}
    >
      <Card
        CardDetails={{
          cardNumber,
          expiry,
          cvv,
        }}
        isFreezed={isFreezed}
      />
      <View style={{ justifyContent: "center" }}>
        <BottomTabButton
          size="lg"
          color={isFreezed ? "primary" : "secondary"}
          Logo={FreezeIcon}
          title="unfreeze"
          onPress={() => setFreeze(!isFreezed)}
        />
      </View>
    </View>
  );
}

export default CardView;
