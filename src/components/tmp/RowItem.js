import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import colors from "./colors";
import {
  Entypo,
} from "@expo/vector-icons";
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    // paddingVertical: 10,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    color: colors.text,
    // paddingRight: 20,
    paddingTop: 10,
  },
  time: {
    fontSize: 14,
    color: colors.timestamp,
    paddingBottom: 10,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 18,
    marginRight: 16,
    // alignSelf: 'flex-start'
    marginTop: 10,
  },
  contentNoti: {
    // paddingRight: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 80,
  },
});
export const RowItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Image
        source={require("../../public/img/assets/avatar.png")}
        style={styles.avatar}
      />
      <View style={styles.contentNoti}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => alert("Xoa thong bao")}>
        <Entypo name="dots-three-horizontal" size={14} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export const RowSeparator = () => {
  return <View style={styles.separator}></View>;
};
