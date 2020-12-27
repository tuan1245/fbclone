import React, { Component ,useCallback, useEffect, useState } from "react";

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
import { PostAction } from '../post/redux/action';
import { connect } from 'react-redux'
const screen = Dimensions.get("window");
const pathImgs = [
  { id: "100", image: require("../../public/img/assets/tempImage1.jpg") },
  { id: "101", image: require("../../public/img/assets/tempImage2.jpg") },
  { id: "102", image: require("../../public/img/assets/tempImage3.jpg") },
  { id: "103", image: require("../../public/img/assets/tempImage4.jpg") },
  { id: "104", image: require("../../public/img/assets/tempImage1.jpg") },
];

const listPost = [
  {
    name: "hung",
    text: "hungdz",
    image: require("../../public/img/assets/avatar.png"),
    timestamp: 1608595200,
  },
  {
    name: "Nguyen Phu Vuong",
    text: "vuongdz",
    image: require("../../public/img/assets/avatar.png"),
    timestamp: 1608595200,
  },
];
const host = "https://fakebook-server.herokuapp.com"
const renderNew = (item) => {
  return (
    //<View>
    //{/* <Image source={{uri: item.path}} style={styles.imgNew} resizeMode='contain'/> */}
    <Image source={item.image} style={styles.imgNew} />
    //</View>
  );
};

const wait = (timeout) => {
  return new Promise(resolve => {
      setTimeout(resolve, timeout);
  });
}


const renderPost = (post) => {
  var img = <Text></Text>
  if(post.image.length !== 0) {
    img =<Image
      source={{uri: host + post.image[0]}}
      style={styles.postImage}
      resizeMode="cover"
    />
  }
    

  return (
    <View style={styles.feedItem}>
      <View style={styles.headerNewfeed}>
        <Image
          source={{uri: "https://fakebook-server.herokuapp.com/upload/avatars/user.jpg"}}
          style={styles.leftNew}
        />
        <View style={styles.rightNew}>
          <TouchableOpacity style={styles.nameandTime} onPress={()=>alert("Go to profile")}>
            <Text style={styles.name}>{post.creator.name}</Text>
            <Text style={styles.timestamp}>
              {/* {moment(post.timestamp).fromNow()} */}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert("Delete post")}>
            <Ionicons name="ios-more" size={24} color="#73788B" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContentNew}>
        <Text style={styles.postContent}>{post.described}</Text>
        {img}
      </View>
      <View style={styles.numberLikeCmt}>
        <Text style={{marginLeft: 10,color:'gray'}}>123 Likes</Text>
        <Text style={{marginRight: 10,color:'gray'}}>321 Comments</Text>
      </View>
      <View style={styles.likeComment}>
        <TouchableOpacity style={styles.like} onPress={()=>alert("Like")}>
          <Ionicons
            name="md-thumbs-up"
            size={24}
            color="#737888"
            style={styles.likeCmtIcon}
          />
          <Text style={styles.textLikeCmt}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comment} onPress={()=>alert("Comment")}>
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
const Home = (props ) => {

  const { auth, post } = props;

  const [refreshing, setRefreshing] = React.useState(false);
  const [postLoading, setPostLoading] = React.useState(false);

  useEffect(() => {
      // ignore Logs
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

      // get list post,
      props.getAllPost();
  }, []);

  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      props.getAllPost();
      console.log('refresh trang chu');

      // check data return isLoading === false;
      wait(2000).then(() => {
          console.log('done');
          setRefreshing(false)

      });
  }, []);
  // render() {
  //LayoutAnimation.easeInEaseOut()

  // console.log("aaa\n\n\n\n\n\n",JSON.stringify(props.post))
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    style={styles.container}
    >
      <StatusBar backgroundColor={"white"} />
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <Text style={styles.facebook}>Facebook</Text>
          <TouchableOpacity onPress={() => props.navigation.push("Search")}>
            <Ionicons name="md-search" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.push("Chat")}>
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
              require("../../public/img/assets/avatar.png")
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
            onFocus={() => props.navigation.push("CreatePost")}
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

      <FlatList
        style={styles.feed}
        data={props.post.listPost}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => `${item.created}`}
        showsVerticalScrollIndicator={false}
      />
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
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    // padding: 8,
    marginVertical: 10,
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
    borderRadius: 18,
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
  numberLikeCmt:{
    flexDirection: 'row',
    justifyContent:'space-between'
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
    marginTop: 10
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
    fontSize: 16
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

const mapStateToProps = state => {
  const { auth, post } = state;
  return { auth, post };
}
const mapActions = {
  getAllPost: PostAction.getAllPost,
  getPostByUser: PostAction.getPostByUser,
};

let connected = connect(mapStateToProps, mapActions)(Home);

export { connected as Home}

// export default Home;
