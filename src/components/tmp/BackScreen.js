import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "./colors";
import { Ionicons } from "@expo/vector-icons";
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  back: {
    marginLeft: 20,
  },
  separator: {
    width: screen.width,
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginTop: 10,
  },
});
export const BackScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.pop()}>
        <Ionicons name="md-arrow-back" size={26} color="black" />
      </TouchableOpacity>
      <View style={styles.separator}></View>
    </View>
  );
};
