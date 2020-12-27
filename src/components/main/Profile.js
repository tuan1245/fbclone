import React, { Component ,useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
// import Fire from "../Fire";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../tmp/colors";
import { ScrollView } from "react-native-gesture-handler";
import { OneFriend } from "../tmp/OneFriend";
import {BackScreen} from "../tmp/BackScreen";
import { PostAction } from '../post/redux/action';
import { connect } from 'react-redux'
import { AuthActions } from "../auth/redux/action";

const screen = Dimensions.get("window");
data = [
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
];
const Profile  = (props) => {

  const host = "https://fakebook-server.herokuapp.com"
  const imgDefault = "../../public/img/assets/avatar.png"

  useEffect(() => {
      props.getProfile()
      props.getPostByUser(props.auth.user.id)
}, [])


  const renderFriend = (friend) => {
    return (
      <View>
        <OneFriend item={friend} onPress={() => alert("One Friend")} />
      </View>
    );
  };

  const renderPost = (post) => {
    var img = <Text></Text>
    if(post.image.length !== 0) {
      img =<Image
        source={post.image[0]}
        style={stylePost.postImage}
        resizeMode="cover"
      />
    }
      
  
    return (
      <View style={stylePost.feedItem}>
        <View style={stylePost.headerNewfeed}>
          <Image
            source={{uri: "../../public/img/assets/avatar.png"}}
            style={stylePost.leftNew}
          />
          <View style={stylePost.rightNew}>
            <TouchableOpacity style={stylePost.nameandTime} onPress={()=>alert("Go to profile")}>
              <Text style={stylePost.name}>{post.creator.name}</Text>
              <Text style={stylePost.timestamp}>
                {/* {moment(post.timestamp).fromNow()} */}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>alert("Delete post")}>
              <Ionicons name="ios-more" size={24} color="#73788B" />
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={stylePost.mainContentNew}>
          <Text style={stylePost.postContent}>{post.described}</Text>
          {img}
        </View>
        <View style={stylePost.numberLikeCmt}>
          <Text style={{marginLeft: 10,color:'gray'}}>123 Likes</Text>
          <Text style={{marginRight: 10,color:'gray'}}>321 Comments</Text>
        </View>
        <View style={stylePost.likeComment}>
          <TouchableOpacity style={stylePost.like} onPress={()=>alert("Like")}>
            <Ionicons
              name="md-thumbs-up"
              size={24}
              color="#737888"
              style={stylePost.likeCmtIcon}
            />
            <Text style={stylePost.textLikeCmt}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylePost.comment} onPress={()=>alert("Comment")}>
            <Ionicons
              name="ios-chatboxes"
              size={24}
              color="#73788B"
              style={stylePost.likeCmtIcon}
            />
            <Text style={stylePost.textLikeCmt}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

    return (
      <ScrollView style={styles.container}>
        <BackScreen/>
        <ScrollView style={styles.wrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../public/img/assets/tempImage1.jpg")}
              style={styles.bkground}
            />
            <Image
              style={styles.avatar}
              source={
            require("../../public/img/assets/avatar.png")
              }
            />
            <Entypo
              name="camera"
              size={20}
              color="black"
              style={styles.icon}
              onPress={() => alert("Change avatar")}
            />
          </View>
          <Text style={styles.name}>{props.auth.profile.name}</Text>
          <View style={styles.toolbar}>
            <TouchableOpacity
              style={styles.wrapperMess}
              onPress={() => alert("Send Message")}
            >
              <Fontisto
                name="messenger"
                size={24}
                color="white"
                style={styles.iconMess}
              />
              <Text style={styles.textMess}>Gửi tin nhắn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menu}
              onPress={() => alert("Block")}
            >
              <Entypo name="dots-three-horizontal" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.separator}></View>

          <View style={styles.information}>
            <View style={styles.oneInfor}>
              <Ionicons name="ios-school" size={24} color="gray" />
              <Text style={styles.textInfor}>
                Đã học tại <Text style={{ fontWeight: "bold" }}>
                  Đại học Bách khoa Hà Nội
                </Text>                
              </Text>
            </View>
            <View style={styles.oneInfor}>
              <Entypo name="home" size={24} color="gray" />
              <Text style={styles.textInfor}>
                Sống tại <Text style={{ fontWeight: "bold" }}>Hà Nội</Text>
              </Text>
            </View>
            <View style={styles.oneInfor}>
              <Entypo name="location-pin" size={24} color="gray" />
              <Text style={styles.textInfor}>
                Đến từ <Text style={{ fontWeight: "bold" }}>Bắc Ninh</Text>
              </Text>
            </View>
            <View style={styles.oneInfor}>
              <Entypo name="dots-three-horizontal" size={24} color="gray" />
              <Text style={styles.textInfor}>
                Xem thêm thông tin giới thiệu của Mỹ Linh
              </Text>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.friends}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                alignSelf: "flex-start",
              }}
            >
              Bạn bè
            </Text>
            <Text style={{ color: "gray", fontSize: 17 }}>
              444 (111) bạn chung
            </Text>
            <View styles={styles.containerFlexList}>
              <FlatList
                // style={styles.feed}
                numColumns={3}
                data={data}
                renderItem={({ item }) => renderFriend(item)}
                keyExtractor={(item) => `${item.id}`}
                // showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          {/* <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statAmount}>Post</Text>
              <Text style={styles.statTitle}>696</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statAmount}>Friends</Text>
              <Text style={styles.statTitle}>696</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statAmount}>CDB</Text>
              <Text style={styles.statTitle}>6969</Text>
            </View>
          </View> */}
            <FlatList
            style={stylePost.feed}
            data={props.post.myPost}
            renderItem={({ item }) => renderPost(item)}
            keyExtractor={(item) => `${item.created}`}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => Fire.shared.signOut()}
        >
          <Text style={{ color: "grey", fontWeight: "500" }}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  wrapper: {
    marginTop: 10,
    // alignItems: "center",
  },
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 15,
    shadowOpacity: 0.4,
    position: "relative",
  },
  avatar: {
    width: 176,
    height: 176,
    borderRadius: 176 / 2,
    // position:'absolute',
    marginTop: screen.height * 0.16,
    borderWidth: 5,
    borderColor: "white",
    alignSelf: "center",
  },
  bkground: {
    width: screen.width * 0.94,
    height: screen.height * 0.28,
    alignSelf: "center",
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon: {
    position: "absolute",
    marginTop: screen.height * 0.34,
    marginLeft: screen.width * 0.62,
  },
  name: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "700",
    alignSelf: "center",
  },
  toolbar: {
    marginTop: 15,
    flexDirection: "row",
    // display:'flex',
    // justifyContent: 'space-between'
  },
  wrapperMess: {
    flexDirection: "row",
    width: screen.width * 0.82,
    height: 40,
    backgroundColor: colors.facebook,
    marginLeft: 10,
    marginRight: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconMess: {
    margin: "auto",
  },
  textMess: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  menu: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    // borderWidth: 0.5,
    backgroundColor: "#dfdada",
    alignItems: "center",
    justifyContent: "center",
  },
  information: {
    marginTop: 20,
  },
  oneInfor: {
    flexDirection: "row",
    height: screen.height * 0.06,
    width: screen.width * 0.92,
    marginLeft: 10,
  },
  textInfor: {
    fontSize: 17,
    marginLeft: 10,
  },
  separator: {
    backgroundColor: colors.border,
    marginTop: 10,
    width: screen.width * 0.92,
    height: StyleSheet.hairlineWidth,
  },
  friends: {
    marginLeft: 10,
    marginTop: 10,
  },
  containerFlexList: {
    // marginLeft: -10
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 32,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statAmount: {
    color: "#4F566D",
    fontSize: 18,
    fontWeight: "300",
  },
  statTitle: {
    color: "#C3C5CD",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  button: {
    marginHorizontal: 30,
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

const stylePost = StyleSheet.create({
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
  getProfile: AuthActions.getProfile,
};

let connected = connect(mapStateToProps, mapActions)(Profile);

export { connected as Profile}