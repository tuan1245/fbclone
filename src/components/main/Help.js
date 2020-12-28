import React from "react";
import { View, Text } from "react-native";
import { BackScreen } from "../tmp/BackScreen";
const Help = () => {
  return (
    <View>
      <BackScreen />
      <View style={{ marginTop: 300, justifyContent: "center", alignItems: "center" }}>
        <Text>Nếu cần trợ giúp xin hãy liên hệ</Text>
        <Text style={{ fontWeight: "bold" }}>vuong.np040119991@gmail.com</Text>
        <Text style={{ fontWeight: "bold" }}>hungdz@gmail.com</Text>
      </View>
    </View>
  );
};

export default Help;
