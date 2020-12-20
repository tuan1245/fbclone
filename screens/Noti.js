import React from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { RowItem, RowSeparator } from "../components/RowItem";

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
      <RowSeparator />
    </View>
  );
};
const Noti = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Thông báo</Text>
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
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  containerFlexList: {
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // marginLeft: 30,
    textAlign: "center",
    marginBottom: 10,
  },
});
export default Noti;
