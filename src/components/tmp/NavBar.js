import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
// import Fire from "../Fire";
import {
  Ionicons,
  Feather,
  Fontisto,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
// import { Fontisto } from "@expo/vector-icons";
// import { FontAwesome5 } from '@expo/vector-icons';
// import moment from "moment";
// import colors from "../constants/colors";

const screen = Dimensions.get("window");
export const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.push("Home")}>
        <AntDesign
          name="home"
          size={28}
          color="gray"
          style={{ marginLeft: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Friends")}>
        {/* <MaterialCommunityIcons
          name="account-group-outline"
          size={24}
          color="gray"
        /> */}
        <MaterialIcons name="people-outline" size={33} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Noti")}>
        <Ionicons name="ios-notifications-outline" size={33} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Tinder")}>
        <Entypo name="heart-outlined" size={30} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Watch")}>
        <MaterialIcons name="live-tv" size={28} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("Menu")}>
        <Feather
          name="menu"
          size={28}
          color="gray"
          style={{ marginRight: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  navBar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
});
