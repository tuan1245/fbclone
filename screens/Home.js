import React, { Component } from "react";
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
import Fire from "../Fire";
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
import moment from "moment";
import { NavBar } from "../components/NavBar";
import colors from "../constants/colors";

const screen = Dimensions.get("window");
const pathImgs = [
  { id: "100", image: require("../assets/images/tempImage1.jpg") },
  { id: "101", image: require("../assets/images/tempImage2.jpg") },
  { id: "102", image: require("../assets/images/tempImage3.jpg") },
  { id: "103", image: require("../assets/images/tempImage4.jpg") },
  { id: "104", image: require("../assets/images/tempImage1.jpg") },
];
const renderNew = (item) => {
  return (
    //<View>
    //{/* <Image source={{uri: item.path}} style={styles.imgNew} resizeMode='contain'/> */}
    <Image
      source={item.image}
      style={styles.imgNew}
    />
    //</View>
  );
};

const Home =  ({ navigation }) => {


  // render() {
  //LayoutAnimation.easeInEaseOut()
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"white"} />
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <Text style={styles.facebook}>facebook</Text>
          <TouchableOpacity onPress={() => navigation.push("Search")}>
            <Ionicons name="md-search" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("Chat")}>
            <Fontisto
              name="messenger"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        {}
        <NavBar />
        <View style={styles.think}>
          <Image
            source={
              // this.state.user.avatar
              //   ? { uri: this.state.user.avatar }
              require("../assets/images/avatar.png")
            }
            style={styles.headerAvt}
          />
          <TextInput
            //autoFocus={true}
            multiline={true}
            numberOfLines={2}
            placeholder="Bạn đang nghĩ gì?"
            onChangeText={(text) => alert({ text })}
            //value={this.state.text}
            placeholderTextColor={"black"}
            style={styles.textInput}
            onFocus={() => navigation.push("Post")}
          ></TextInput>
        </View>
        <View style={styles.media}>
          <View style={styles.oneMedia}>
            <MaterialIcons name="video-call" size={24} color="red" />
            <Text style={{ fontWeight: "600" }}> Phát trực tiếp</Text>
          </View>
          <View style={styles.oneMedia}>
            <Ionicons name="md-images" size={24} color="green" />
            <Text> Ảnh </Text>
          </View>
          <View style={styles.oneMedia}>
            <MaterialIcons name="video-call" size={24} color="#8000FF" />
            <Text> Phòng họp mặt</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.yourNews}>
        <FlatList
          data={pathImgs}
          renderItem={({ item }) => renderNew(item)}
          keyExtractor={(item) => `${item.id}`}
          horizontal={true}
        />
      </View>
    </ScrollView>
    //<FlatList
    //   style={styles.feed}
    //   data={this.state.dataSource}
    //   renderItem={({ item }) => this.renderPost(item)}
    //   keyExtractor={(item) => `${item.timestamp}`}
    //   showsVerticalScrollIndicator={false}
    // />
    //</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 35,
    backgroundColor: "#EFECF4",
  },
  facebook: {
    fontSize: 28,
    color: colors.facebook,
    fontWeight: "bold",
    marginLeft: 10,
    width: screen.width * 0.8,
  },
  header: {
    // padding: 16,
    // backgroundColor: "#FFF",
    // alignItems: "center",
    // borderBottomWidth: 1,
    // justifyContent: "center",
    // borderBottomColor: "#EBECF4",
    // shadowColor: "#454D65",
    // shadowOffset: { height: 5 },
    // shadowRadius: 15,
    // shadowOpacity: 0.2,
    // zIndex: 10,
    flexDirection: "row",
    //justifyContent:'space-between',
    alignItems: "center",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  navBar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    //height: 50,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "gray",
  },
  headerAvt: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
  },
  think: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    width: screen.width * 0.84,
    marginRight: 10,
    paddingLeft: 20,
    borderColor: colors.border,
    color: "black",
  },
  media: {
    flexDirection: "row",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: "gray",
  },
  oneMedia: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: screen.width * 0.33333,
    borderRightWidth: 0.5,
    borderColor: "gray",
  },
  feed: {
    marginHorizontal: 0,
    marginTop: 5,
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 4,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65",
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4,
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899",
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
  },
  yourNews: {
    marginTop: 10,
    backgroundColor: "white",
    height: 230,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  imgNew: {
    width: 100,
    height: 200,
    marginRight: 7,
    borderRadius: 10,
    
  },
});

export default Home