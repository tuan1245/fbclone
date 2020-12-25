import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RowItem, RowSeparator } from "../tmp/RowItem";
import { NavBar } from "../tmp/NavBar";
import {
  Ionicons,
  Feather,
  Fontisto,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

notifications = [
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  {
    id: "2",
    text: "Hung da binh luan ve bai viet cua anh ay",
    time: "18:00:00",
  },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  {
    id: "2",
    text: "Hung da binh luan ve bai viet cua anh ay",
    time: "18:00:00",
  },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  {
    id: "2",
    text: "Hung da binh luan ve bai viet cua anh ay",
    time: "18:00:00",
  },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  {
    id: "2",
    text: "Hung da binh luan ve bai viet cua anh ay",
    time: "18:00:00",
  },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  {
    id: "2",
    text: "Hung da binh luan ve bai viet cua anh ay",
    time: "18:00:00",
  },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
  {
    id: "2",
    text: "Hung da binh luan ve bai viet cua anh ay",
    time: "18:00:00",
  },
  { id: "1", text: "Tuan da thich bai viet cua ban", time: "18:00:00" },
];
renderPost = (item) => {
  return (
    <View>
      <RowItem item={item} onPress={() => alert("Notification")} />
      {/* <RowSeparator /> */}
    </View>
  );
};
const Noti = ({ navigation }) => {
  return (
    <View>
      <NavBar />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Thông báo</Text>
          <TouchableOpacity onPress={() => navigation.push("Search")}>
            <Ionicons
              name="md-search"
              size={28}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>

        <View styles={styles.containerFlexList}>
          <FlatList
            // style={styles.feed}
            data={notifications}
            renderItem={({ item }) => renderPost(item)}
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
});
export default Noti;
