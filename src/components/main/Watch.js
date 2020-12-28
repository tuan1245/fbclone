import React, { useCallback, useEffect, useState } from "react";
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
  RefreshControl,
  LogBox,
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
import moment from "moment";
import { NavBar } from "../tmp/NavBar";
import colors from "../tmp/colors";
// import Video from "react-native-video";
import { Video } from "expo-av";
const screen = Dimensions.get("window");

const listVideo = [
  {
    name: "Hung",
    video: require("../../public/video/video_test2.mp4"),
    described: "Phim hay",
    timestamp: 1608595200,
  },
  {
    name: "Nguyen Phu Vuong",
    video: require("../../public/video/video2.mp4"),
    described: "Phim khong hay",
    timestamp: 1608595200,
  },
];
const renderVideo = (video) => {
  return (
    <View style={styles.feedItem}>
      <View style={styles.headerNewfeed}>
        <Image
          source={require("../../public/img/dali_mask.jpg")}
          style={styles.leftNew}
        />
        <View style={styles.rightNew}>
          <TouchableOpacity
            style={styles.nameandTime}
            onPress={() => alert("Go to profile")}
          >
            <Text style={styles.name}>{video.name}</Text>
            <Text style={styles.timestamp}>
              {moment(video.timestamp).fromNow()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Delete video")}>
            <Ionicons name="ios-more" size={24} color="#73788B" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContentNew}>
        <Text style={styles.postContent}>{video.described}</Text>
        {/* <View> */}
        <Video
          source={video.video}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: screen.width, height: screen.width, marginTop: 10 }}
        />
        {/* </View> */}
      </View>
      <View style={styles.numberLikeCmt}>
        <Text style={{ marginLeft: 10, color: "gray" }}>123 Likes</Text>
        <Text style={{ marginRight: 10, color: "gray" }}>321 Comments</Text>
      </View>
      <View style={styles.likeComment}>
        <TouchableOpacity style={styles.like} onPress={() => alert("Like")}>
          <Ionicons
            name="md-thumbs-up"
            size={24}
            color="#737888"
            style={styles.likeCmtIcon}
          />
          <Text style={styles.textLikeCmt}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.comment}
          onPress={() => alert("Comment")}
        >
          <Ionicons
            name="ios-chatboxes"
            size={24}
            color="#73788B"
            style={styles.likeCmtIcon}
          />
          <Text style={styles.textLikeCmt}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Watch = () => {
  return (
    <View>
      <NavBar />
      <FlatList
        style={styles.feed}
        data={listVideo}
        renderItem={({ item }) => renderVideo(item)}
        keyExtractor={(item) => `${item.timestamp}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    // padding: 8,
    marginVertical: 5,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  headerNewfeed: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  leftNew: {
    width: screen.width * 0.12,
    height: screen.width * 0.12,
    borderRadius: 23,
    marginRight: 16,
  },
  rightNew: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameandTime: {
    width: screen.width * 0.74,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4,
  },
  mainContentNew: {},
  postContent: {
    marginTop: 16,
    fontSize: 14,
    marginLeft: 10,
    color: "black",
  },
  postImage: {
    width: undefined,
    height: 250,
    marginVertical: 16,
  },
  numberLikeCmt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  likeComment: {
    flexDirection: "row",
    width: screen.width * 0.92,
    height: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    marginHorizontal: screen.width * 0.04,
    marginTop: 10,
  },
  like: {
    flexDirection: "row",
    width: screen.width * 0.46,
    alignSelf: "center",
    justifyContent: "center",
  },
  comment: {
    flexDirection: "row",
    width: screen.width * 0.46,
    alignSelf: "center",
    justifyContent: "center",
  },
  textLikeCmt: {
    color: "gray",
    marginTop: 2,
    fontSize: 16,
  },
  likeCmtIcon: {
    marginRight: 10,
  },
  yourNews: {
    marginTop: 10,
    backgroundColor: "white",
    height: 230,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  imgNew: {
    width: 100,
    height: 200,
    marginRight: 7,
    borderRadius: 10,
  },
});

export default Watch;