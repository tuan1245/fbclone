import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  PermissionsAndroid,
} from "react-native";
import colors from "../tmp/colors";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
// import Fire from "../../../Fire";
import * as ImagePicker from "expo-image-picker";
// const firebase = require("firebase");
// require("firebase/firestore");
import { Camera } from 'expo-camera';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PostAction } from '../post/redux/action';
import { connect } from 'react-redux'

const Post = (props) => {
  state = {
  text: "",
  image: null,
  user: {},
  hasPermission:false
};
  // async componentDidMount() {
  //   // const user = this.props.uid || Fire.shared.uid;
  //   // this.tuandeptrai = Fire.shared.firestore
  //   //   .collection("users")
  //   //   .doc(user)
  //   //   .onSnapshot((doc) => {
  //   //     this.setState({ user: doc.data() });
  //   //   });
  //   //   getPhotoPermission();
  // }
  
  // componentWillUnmount() {
  //   // this.tuandeptrai();
  // }
  
  getPhotoPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status != "granted") {
        alert("We need permission to access your camera roll");
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA_ROLL,
          {
            title: "Fbclone Camera Permission",
            message: "Fbclone needs access to your camera",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
      }
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        alert("We need permission to access your camera roll");
      }
    }
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission:status === 'granted' });
  
  };
  
  handlePost = () => {
    // Fire.shared
    //   .addPost({ text: this.state.text.trim(), localUri: this.state.image })
    //   .then((ref) => {
    //     this.setState({ text: "", image: null });
    //     this.props.navigation.goBack();
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };
  takePicture = async() => {
    
  
  };
  pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    // });
    // if (!result.cancelled) {
    //   this.setState({ image: result.uri });
    // }
  };

    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="md-arrow-back" size={24} color="black"></Ionicons>
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Tạo bài viết</Text>
          <TouchableOpacity onPress={handlePost}>
            <Text style={{ fontWeight: "700", fontSize:18 }}>ĐĂNG</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.userInfor}>
            <Image
              source={require("../../public/img/assets/avatar.png")}
              style={styles.avatar}
            />
            <Text style={{ fontWeight: "700", fontSize: 20 }}>{state.user.name}</Text>
          </View>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={4}
            style={styles.textInput}
            placeholder="Bạn đang nghĩ gì?"
            // onChangeText={(text) => this.setState({ text })}
            // value={this.state.text}
          ></TextInput>
        </View>
        <View style={
          {
            display:"flex",
            justifyContent:"flex-end",
            flexDirection:"row"
          }
        }>
        <TouchableOpacity style={styles.photo} onPress={pickImage}>
          <Ionicons name="md-images" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.photo} onPress={takePicture}>
          <Ionicons name="md-camera" size={32} color={colors.facebook} />
        </TouchableOpacity>
        </View>
        
        <View style={{ marginHorizontal: 32, marginTop: 32, height: 300 }}>
          <Image
            source={{ uri: state.image }}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    marginTop: 16,
    borderBottomColor: "#D8D9DB",
  },
  userInfor: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: "row",
  },
  textInput:{
    // backgroundColor: "red",
    paddingLeft: 10,
    fontSize: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: "flex-end",
    marginRight: 30,
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

let connected = connect(mapStateToProps, mapActions)(Post);

export { connected as Post}
