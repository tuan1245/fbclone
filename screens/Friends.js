import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { NavBar } from "../components/NavBar";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowSeparator } from "../components/RowItem";

const friends = [
  { id: "1", name: "Nguyễn Tiến", time: "1 năm" },
  { id: "1", name: "Nguyễn Tiến", time: "1 năm" },
  { id: "1", name: "Nguyễn Tiến", time: "1 năm" },
  { id: "1", name: "Nguyễn Tiến", time: "1 năm" },
  { id: "1", name: "Nguyễn Tiến", time: "1 năm" },
  { id: "1", name: "Nguyễn Tiến", time: "1 năm" },
];
const friendsYouCanKnows = [
  { id: "1", name: "Phạm Tiến" },
  { id: "1", name: "Phạm Tiến" },
  { id: "1", name: "Phạm Tiến" },
  { id: "1", name: "Phạm Tiến" },
  { id: "1", name: "Phạm Tiến" },
  { id: "1", name: "Phạm Tiến" },
  { id: "1", name: "Phạm Tiến" },
];
const screen = Dimensions.get("window");

const renderFriend = (item) => {
  return (
    <TouchableOpacity style={styles.row}>
      <TouchableOpacity onPress={() => alert("Link to this friend")}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.contentRow}>
        <View style={styles.textAdd}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.buttonAdd}>
          <TouchableOpacity onPress={() => alert("Yes")}>
            <Text style={styles.yes}>Chấp nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("No")}>
            <Text style={styles.no}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const renderFriendKnows = (item) => {
  return (
    <TouchableOpacity style={styles.row}>
      <TouchableOpacity onPress={() => alert("Link to this friend")}>
        <Image
          source={require("../assets/images/avatar.png")}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.contentRow}>
        <View style={styles.textAdd}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.buttonAdd}>
          <TouchableOpacity onPress={() => alert("Add")}>
            <Text style={styles.yes}>Thêm bạn bè</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Delete")}>
            <Text style={styles.no}>Gỡ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Friends = ({ navigation }) => {
  return (
    <View>
      <NavBar />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bạn bè</Text>
          <TouchableOpacity onPress={() => navigation.push("Search")}>
            <Ionicons
              name="md-search"
              size={28}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.contents}>
          <View style={styles.textAddFriend}>
            <Text style={styles.addFriend}>
              Lời mời kết bạn <Text style={{ color: "red" }}>6</Text>
            </Text>
            <Text style={{ marginRight: 10, color: colors.facebook }}>
              Xem tất cả
            </Text>
          </View>
          <View styles={styles.containerFlexList}>
            <FlatList
              // style={styles.feed}
              data={friends}
              renderItem={({ item }) => renderFriend(item)}
              keyExtractor={(item) => `${item.id}`}
              // showsVerticalScrollIndicator={<View style={styles.separator}></View>false}
            />
          </View>
        </View>
        <Text style={styles.seeAll}>Xem tất cả</Text>
        <View style={styles.separator}></View>
        <Text style={styles.youKnow}>Những người bạn có thể biết</Text>
        <View styles={styles.containerFlexList}>
          <FlatList
            // style={styles.feed}
            data={friendsYouCanKnows}
            renderItem={({ item }) => renderFriendKnows(item)}
            keyExtractor={(item) => `${item.id}`}
            // showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerFlexList: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    //textAlign: "center",
    marginBottom: 10,
  },
  contents: {
    //marginTop: 10,
    //borderTopWidth: 0.5,
    //borderTopColor: "gray",
  },
  textAddFriend: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
  },
  addFriend: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 90,
    height: 90,
  },
  contentRow: {
    marginLeft: 10,
    paddingVertical: 10,
  },

  textAdd: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "700",
    // width: 100
  },
  time: {
    color: colors.timestamp,
    fontSize: 12,
  },
  buttonAdd: {
    flexDirection: "row",
    marginTop: 10,
  },
  yes: {
    width: 120,
    height: 40,
    backgroundColor: "#1a75ff",
    textAlign: "center",
    borderRadius: 7,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    lineHeight: 40,
  },
  no: {
    width: 120,
    height: 40,
    backgroundColor: colors.border,
    textAlign: "center",
    borderRadius: 7,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 40,
  },
  seeAll: {
    backgroundColor: colors.border,
    width: screen.width * 0.92,
    height: 40,
    marginHorizontal: screen.width * 0.04,
    textAlign: "center",
    lineHeight: 40,
    borderRadius: 5,
    fontWeight: "bold",
    marginTop: 10,
  },
  youKnow: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10
  },
  separator: {
    width: screen.width * 0.92,
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft:screen.width * 0.04,
    marginTop: 20,
  },
});
export default Friends;
