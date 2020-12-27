import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  row: {
    // paddingHorizontal: 5
    paddingRight: 5
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginTop: 10
    // paddingRight: 20,
    // paddingTop: 10,
  },
  number: {
    fontSize: 13,
    color: colors.timestamp,
    // paddingBottom: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 7,
    // marginRight: 16,
    // alignSelf: 'flex-start'
    marginTop: 10
  },
  text: {
    // paddingRight: 20,
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "space-between",
    height: 50,
    width: 100
  },
});
export const OneFriend = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Image
        source={require("../../public/img/assets/tempImage2.jpg")}
        style={styles.avatar}
      />
      <View style={styles.text}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.number}>{item.number}</Text>
      </View>
    </TouchableOpacity>
  );
};

