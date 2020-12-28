import React, { useState } from "react";
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
import { NavBar } from "../tmp/NavBar";
import {
  Ionicons,
  Entypo,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import colors from "../tmp/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
// import { RowSeparator } from "../components/RowItem";

const screen = Dimensions.get("window");
const news = [
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
  { id: "1", img: require("../../public/img/assets/avatar.png"), name: "Linh" },
];
const renderNews = (item) => {
  return (
    <View style={styles.oneNew}>
      <Image source={item.img} style={styles.avatar} />
      <Text style={styles.ownNews}>{item.name}</Text>
    </View>
  );
};

const Tinder = () => {
  return (
    <ScrollView style={styles.container}>
      <NavBar />
      <ScrollView style={styles.top} horizontal={true}>
        <View style={styles.oneTopItem}>
          <Ionicons name="ios-person" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontWeight:'bold' }}>Trang cá nhân</Text>
        </View>
        <View style={styles.oneTopItem}>
        <Ionicons name="ios-heart" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontWeight:'bold' }}>Đã thích bạn</Text>
        </View>
        <View style={styles.oneTopItem}>
          <Entypo name="chat" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontWeight:'bold' }}>Gợi ý ghép đôi</Text>
        </View>
      </ScrollView>
      <View style={styles.user}>
        <Image
          source={require("../../public/img/girl.jpg")}
          style={styles.imgUser}
        />
        <View style={styles.textUser}>
          <Text style={styles.textTop}>Khểnh, 21</Text>
          <Text style={{ fontSize: 16 }}>Đến từ Hà Nội</Text>
        </View>
      </View>
      <View style={styles.news}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tin gợi ý</Text>
        <FlatList
          // style={styles.feed}
          data={news}
          renderItem={({ item }) => renderNews(item)}
          keyExtractor={(item) => `${item.id}`}
          horizontal={true}
        />
      </View>
      <View style={styles.more}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Nội dung khác đáng khám phá
        </Text>
        <View style={styles.oneContent}>
          <View style={styles.left}>
            <MaterialCommunityIcons
              name="timetable"
              size={30}
              color="#a64dff"
            />
          </View>
          <View style={styles.center}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Sự kiện chung
            </Text>
            <Text style={{ color: "gray" }}>
              Ghép đôi với những người tham gia sự kiện trên Facebook giống bạn,
              như nhạc hội hoặc đi bộ đường dài.
            </Text>
          </View>
          <View style={styles.right}>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
        <View style={styles.oneContent}>
          <View style={styles.left}>
            <FontAwesome name="group" size={24} color="#a64dff" />
          </View>
          <View style={styles.center}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Nhóm chung</Text>
            <Text style={{ color: "gray" }}>
              Xem gợi ý ghép đôi về những người tham gia nhóm cùng với bạn.
            </Text>
          </View>
          <View style={styles.right}>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
        <View style={styles.oneContent}>
          <View style={styles.left}>
            <AntDesign name="heart" size={24} color="#a64dff" />
          </View>
          <View style={styles.center}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Crush bí mật
            </Text>
            <Text style={{ color: "gray" }}>
              Thêm người mà bạn có cảm tình làm crush bí mật.
            </Text>
          </View>
          <View style={styles.right}>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    marginTop: 10,
  },
  oneTopItem: {
    flexDirection: "row",
    width: 140,
    backgroundColor: colors.border,
    height: 36,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  user: {
    marginTop: 10,
    alignSelf: "center",

    width: screen.width * 0.92,
    height: screen.height * 0.65,
  },
  imgUser: {
    width: screen.width * 0.92,
    height: screen.height * 0.5,
    borderRadius: 10,
  },
  textUser: {
    width: screen.width * 0.8,
    height: screen.height * 0.1,
    marginTop: 26,
    marginLeft: 20,
    // backgroundColor: "red",
  },
  textTop: {
    fontWeight: "bold",
    fontSize: 25,
  },
  news: {
    // marginTop: 10,
    alignSelf: "center",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: colors.border,
    width: screen.width * 0.92,
    height: screen.height * 0.17,
    paddingVertical: 10,
  },
  oneNew: {
    marginTop: 10,
    marginLeft: 15,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#a64dff",
  },
  ownNews: {
    marginTop: 5,
  },
  more: {
    width: screen.width * 0.92,
    height: screen.height * 0.55,
    alignSelf: "center",
    marginTop: 10,
  },
  oneContent: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    width: screen.width * 0.92,
    height: screen.height * 0.16,
    backgroundColor: "white",
    marginTop: 10,
  },
  left: {
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    width: 200,
    height: 100,
    marginLeft: 20,
  },
  right: {
    marginLeft: 20,
  },
});
export default Tinder;
