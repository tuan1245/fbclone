import React, { useState,useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { NavBar } from "../tmp/NavBar";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import colors from "../tmp/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { PostAction } from '../post/redux/action';
import { connect } from 'react-redux'
import moment from "moment";
// import { RowSeparator } from "../components/RowItem";

const comments = [
  {
    id: "1",
    user: {
      name: "Vuong",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "CommentCommentCommentCommentCommentCommentCommentComment 1",
    time: "1 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
  {
    id: "2",
    user: {
      name: "Hung",
      avatar: require("../../public/img/assets/avatar.png"),
    },
    content: "Comment 2",
    time: "2 năm",
  },
];

const screen = Dimensions.get("window");
const host = "https://fakebook-server.herokuapp.com"
const renderComment = (item) => {
  return (
    <View style={styles.row}>
      <Image source={{uri: host + item.creator.avatar}} style={styles.avatar} />
      <View style={styles.contentCmt}>
        <View style={styles.nameText}>
          <Text style={styles.name}>{item.creator.name}</Text>
          <Text style={styles.text}>{item.described}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.time}>{moment(item.createAt).fromNow()}</Text>
          <Text style={styles.likerep}>Thích</Text>
          <Text style={styles.likerep}>Trả lời</Text>
        </View>
      </View>
    </View>
  );
};

const Comment = (props) => {
  
  const [content, setContent] = useState("");
  const [newComment, setNewComment] = useState(null);
  const [loading, setLoading] = useState(false);

  const { route } = props;
  useEffect(() => {
      // props.getCommentPost("5fdef6b3c2916600170accfd");
      route?.params?.id && props.getCommentPost(route.params.id);
  }, [])
  // console.log(props.post)


  const submitAdd = async() => {
    setLoading(true)
    let data = {
        described: content
    }

    setContent("")
    Keyboard.dismiss()
    await props.addCommentPost(props.route.params.id, data);
    setLoading(false)
  }


  const [changeHeight, setChangeHeight] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight:'bold'}}>123 likes</Text>
      </View>
      <View style={changeHeight ? styles.onFocusInput : styles.list}>
        <FlatList
          // style={styles.feed}
          data={props.post.comment}
          renderItem={({ item }) => renderComment(item)}
          keyExtractor={(item) => `${item.createAt}`}
          // showsVerticalScrollIndicator={false}
        />

             {    loading === true &&
                        <View style={{
                                margin: 10, height: 50, flexDirection: "column", justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <ActivityIndicator size="large" color="#ccc" />
                            <Text>Loading...</Text>
                        </View>
                    }

        {/* {
          newComment ?
          <View style={styles.row}>
          <Image source={{uri: host + newComment.avatar}} style={styles.avatar} />
          <View style={styles.contentCmt}>
            <View style={styles.nameText}>
              <Text style={styles.name}>{newCommnet.name}</Text>
              <Text style={styles.text}>{newComment.described}</Text>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.time}>{moment(newComment.createAt).fromNow()}</Text>
              <Text style={styles.likerep}>Thích</Text>
              <Text style={styles.likerep}>Trả lời</Text>
            </View>
          </View>
        </View>
        : <View></View>

        } */}
        <View style={styles.cmtBottom}>
          <Feather name="camera" size={24} color="gray" />
          <View>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={2}
            placeholder="Viết bình luận..."
            onChangeText={(text) => setContent(text)}
            value={content}
            placeholderTextColor={"gray"}
            style={styles.textInput}
            onFocus={() => setChangeHeight(true)}
            onBlur={() => setChangeHeight(false)}
          ></TextInput>
          </View>
          
          <TouchableOpacity onPress={()=> submitAdd()}>
            <Ionicons name="md-send" size={30} color={colors.facebook} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: colors.border
  },
  header:{
    width: screen.width,
    height: 30,
    borderBottomWidth: 0.5,
    paddingLeft: 10
  },
  list: {
    width: screen.width,
    height: screen.height * 0.96,
  },
  onFocusInput: {
    height: screen.height * 0.57,
  },
  row: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 15,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius:50
  },
  nameText: {
    marginHorizontal: 10,
    backgroundColor: colors.border,
    width: screen.width * 0.8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
  },
  text: {},
  time: {
    color: "gray",
  },
  bottom: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  likerep: {
    marginLeft: 20,
    fontWeight: "700",
    color: "gray",
  },
  cmtBottom: {
    // width: screen.width*0.9,
    height: 50,
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginHorizontal: 10,
    paddingHorizontal: 12,
    borderTopColor: "gray",
    borderTopWidth: 0.5,
  },
  textInput: {
    borderRadius: 20,
    backgroundColor: colors.border,
    width: screen.width * 0.76,
    paddingLeft: 10,
    // marginLeft: 8,
    fontSize: 16,
  },
});

const mapStateToProps = state => {
  const { profile, post } = state;
  return { profile, post };
}
const mapActions = {
  getCommentPost: PostAction.getCommentPost,
  addCommentPost: PostAction.addCommentPost,
}
let connected = connect(mapStateToProps, mapActions)(Comment);

export { connected as Comment }
// export default Comment;