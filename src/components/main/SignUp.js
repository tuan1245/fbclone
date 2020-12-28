import React, { useState ,useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
// import Fire from "../Fire";
import { Ionicons, Entypo } from "@expo/vector-icons";
// import Calendar from "react-native-calendar-datepicker";
// import Moment from "moment";
// import UserPermissions from "../utilities/UserPermissions";
// import * as ImagePicker from "expo-image-picker";
import { pageName } from "../../navigator/constant.page.js";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from 'react-redux'
import { AuthActions } from '../auth/redux/action'
import * as ImagePicker from 'expo-image-picker';

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageAvatar, setImageAvatar] = useState("../../public/img/assets/avatar.png");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageAvatar(result.uri);
    }
  };

  useEffect(() => {
    console.log('props.auth?.user?.id', props.auth);
    
    if (props.auth.user._id){
        // console.log(props.getProfile());
    
        setLoading(false);
        props.navigation.navigate("Đăng nhập");
    }
    else if (props.auth.error !== null){
        setLoading(false);
        alert("Mật khẩu phải ít nhất 6 ký tự")
    }
}, [props.auth])

  const onPressRegister = (e) => {
    e.preventDefault();
    let user = {
      name: name.name,
      password: password.password,
      phoneNumber: phone.phone,
      bird: new Date()
    }

    var vnf_regex = /(([0-9]{8})\b)/g;

    if(user.password === undefined | user.name === undefined | user.phoneNumber === undefined | confirmPass.confirmPass === undefined){
      alert("Khong de trong bat ky truong nao")
    }
    else if(user.password !== confirmPass.confirmPass){
      alert("Mat khau khong trung nhau")
    }
    else if(!vnf_regex.test(user.phoneNumber)){
      alert("So dien thoai gom 10 - 11 so")
    }
    else if(user.password.length < 6){
      alert("Mau khau gom it nhat 6 ky tu")
    }
    else{
      setLoading(true)
      props.register(user)
    }

  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      {/* <ImageBackground
        source={require("../../public/img/assets/background.jpg")}
        style={{
          flex: 1,
          width: "100%",
          height: "auto",
          justifyContent: "center",
        }}
        imageStyle={{ width: "auto", height: 300 }}
      > */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => props.navigation.push(pageName.LOG_IN_NEW_ACC)}
      >
        <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
      </TouchableOpacity>
      <View>
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={styles.greeting}> {``} </Text>
          <TouchableOpacity
            style={styles.avatarPlaceholder}
            // onPress={this.handlePickAvatar}
            onPress={() => pickImage()}
          >
            <Image
              source={
                // { uri: imageAvatar }
                {uri: "https://fakebook-server.herokuapp.com/upload/avatars/user.jpg"}
              }
              style={styles.avatar}
            />
            {/* <Entypo
              name="camera"
              size={28}
              color="gray"
              style={{marginTop: 70}}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Pick avatar")}>
            <Text style={{ marginTop: 10, color: "gray" }}>
              Chọn ảnh đại diện
            </Text>
          </TouchableOpacity>

          {/* {this.state.errorMessage &&  */}
          {/* ( */}
          <Text style={styles.error}>{/* {this.state.errorMessage} */}</Text>
          {/* ) */}
          {/* } */}
        </View>

        <View style={styles.form}>
          <View style={{ marginTop: 16 }}>
            {/* <Text style={styles.inputTitle}>Tên đầy đủ</Text> */}
            <TextInput
              style={styles.input}
              placeholder="Tên đầy đủ"
              autoCapitalize="none"
              onChangeText={(name) => setName({ name })}
              value={name}
            ></TextInput>
          </View>
          {/* <View style={{ marginTop: 16 }}>
              <Text style={styles.inputTitle}>Ngày sinh</Text> */}
          {/* <View>
              
              <Calendar
                onChange={(date) => setDate({ date })}
                selected={date}
                minDate={Moment().startOf("day")}
                maxDate={Moment().add(10, "years").startOf("day")}
              />
            </View> */}
          {/* </View> */}
          <View style={{ marginTop: 16 }}>
            {/* <Text style={styles.inputTitle}>Số điện thoại hoặc email</Text> */}
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại hoặc email"
              autoCapitalize="none"
              onChangeText={(phone) => setPhone({ phone })}
              value={phone}
            ></TextInput>
          </View>
          <View style={{ marginTop: 16 }}>
            {/* <Text style={styles.inputTitle}>Mật khẩu</Text> */}
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(password) => setPassword({ password })}
              value={password}
            ></TextInput>
          </View>
          <View style={{ marginTop: 16 }}>
            {/* <Text style={styles.inputTitle}>Nhập lại mật khẩu</Text> */}
            <TextInput
              style={styles.input}
              placeholder="Nhập lại mật khẩu"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(confirmPass) => setConfirmPass({ confirmPass })}
              value={confirmPass}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          //  onPress={this.handleSignup}
          onPress={(e) => onPressRegister(e)}
        >
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          // onPress={() => this.props.navigation.navigate("Sign In")}
          onPress={() => props.navigation.push(pageName.LOG_IN_NEW_ACC)}
        >
          <Text style={{ color: "#3971bf", fontSize: 12 }}>
            Bạn đã có tài khoản?{" "}
          </Text>
        </TouchableOpacity>

        {loading === true &&
                        <View style={{
                                margin: 10, height: 50, flexDirection: "column", justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <ActivityIndicator size="large" color="#ccc" />
                            <Text>Loading...</Text>
                        </View>
                    }
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
  // }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greeting: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: "#FFF",
  },
  errorMessage: {
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
    marginTop: 210,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "black",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "black",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#3971bf",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 16,
  },
  back: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: "#e1e2e6",
    borderRadius: 50,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});



const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
}
const mapActions = {
  login: AuthActions.login,
  register: AuthActions.register,
  getVerifyCode: AuthActions.getVerifyCode,
}
let connected = connect(mapStateToProps, mapActions)(SignUp);

export { connected as SignUp }


























// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   StatusBar,
//   TextInput,
//   TouchableOpacity,
//   LayoutAnimation,
//   Image,
// } from "react-native";
// // import Fire from "../Fire";
// import { Ionicons } from "@expo/vector-icons";
// // import UserPermissions from "../utilities/UserPermissions";
// import * as ImagePicker from "expo-image-picker";

// const SignUp = () => {
//   //  navigationOptions = {
//   //   headerShown: false,
//   // };

//   // state = {
//   //   user: {
//   //     name: "",
//   //     email: "",
//   //     password: "",
//   //     avatar: null,
//   //   },
//   //   errorMessage: null,
//   // };

//   // handleSignup = () => {
//   //   // Fire.shared.createUSer(this.state.user);
//   // };

//   // handlePickAvatar = async () => {
//   //   // UserPermissions.getPhotoPermissions()
//   //   let result = await ImagePicker.launchImageLibraryAsync({
//   //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//   //     allowsEditing: true,
//   //     aspect: [4, 3],
//   //   });
//   //   if (!result.cancelled) {
//   //     console.log(result.uri);
//   //     this.setState({ user: { ...this.state.user, avatar: result.uri } });
//   //   }
//   // };

//   // render() {
//     LayoutAnimation.easeInEaseOut();

//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content"></StatusBar>
//         <ImageBackground
//           source={require("../../public/img/assets/background.jpg")}
//           style={{
//             flex: 1,
//             width: "100%",
//             height: "auto",
//             justifyContent: "center",
//           }}
//           imageStyle={
//             {width: "auto",
//             height: 300}
//           }
//         >
//           <TouchableOpacity
//             style={styles.back}
//             onPress={() => this.props.navigation.navigate("Login")}
//           >
//             <Ionicons
//               name="ios-arrow-round-back"
//               size={32}
//               color="#FFF"
//             ></Ionicons>
//           </TouchableOpacity>
//           <View>
//             <View
//               style={{
//                 position: "absolute",
//                 alignItems: "center",
//                 width: "100%",
//               }}
//             >
//               <Text style={styles.greeting}>
//                 {" "}
//                 {``}{" "}
//               </Text>
//               <TouchableOpacity
//                 style={styles.avatarPlaceholder}
//                 onPress={this.handlePickAvatar}
//               >
//                 <Image
//                   // source={{ uri: this.state.user.avatar }}
//                   // style={styles.avatar}
//                 />
//                 <Ionicons
//                   name="ios-add"
//                   size={32}
//                   color="#FFF"
//                   style={{ marginTop: 6, marginLeft: 2 }}
//                 ></Ionicons>
//               </TouchableOpacity>
//               {/* {this.state.errorMessage && (
//                 <Text style={styles.error}>{this.state.errorMessage}</Text>
//               )} */}
//             </View>

//             <View style={styles.form}>
//               <View>
//                 <Text style={styles.inputTitle}>Full name</Text>
//                 <TextInput
//                   style={styles.input}
//                   autoCapitalize="none"
//                   // onChangeText={(name) =>
//                   //   this.setState({ user: { ...this.state.user, name } })
//                   // }
//                   // value={this.state.user.name}
//                 ></TextInput>
//               </View>
//               <View style={{ marginTop: 16 }}>
//                 <Text style={styles.inputTitle}>Email</Text>
//                 <TextInput
//                   style={styles.input}
//                   autoCapitalize="none"
//                   // onChangeText={(email) =>
//                   //   this.setState({ user: { ...this.state.user, email } })
//                   // }
//                   // value={this.state.user.email}
//                 ></TextInput>
//               </View>
//               <View style={{ marginTop: 16 }}>
//                 <Text style={styles.inputTitle}>Password</Text>
//                 <TextInput
//                   style={styles.input}
//                   autoCapitalize="none"
//                   secureTextEntry
//                   // value={this.state.user.password}
//                   // onChangeText={(password) =>
//                   //   this.setState({ user: { ...this.state.user, password } })
//                   // }
//                 ></TextInput>
//               </View>
//             </View>
//             <TouchableOpacity style={styles.button} > 
           
//               <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ alignSelf: "center", marginTop: 32 }}
//               onPress={() => this.props.navigation.navigate("Sign In")}
//             >
//               <Text style={{ color: "#3971bf", fontSize: 12 }}>
//                 Already have an account?{" "}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   greeting: {
//     marginTop: 12,
//     fontSize: 16,
//     fontWeight: "400",
//     textAlign: "center",
//     color: "#FFF",
//   },
//   errorMessage: {
//     marginTop: 6,
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: 30,
//   },
//   form: {
//     marginTop: 210,
//     marginHorizontal: 30,
//   },
//   inputTitle: {
//     color: "black",
//     fontSize: 10,
//     textTransform: "uppercase",
//   },
//   input: {
//     borderBottomColor: "#8A8F9E",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     height: 40,
//     fontSize: 15,
//     color: "black",
//   },
//   button: {
//     marginHorizontal: 30,
//     backgroundColor: "#3971bf",
//     borderRadius: 4,
//     height: 52,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   error: {
//     color: "#E9446A",
//     fontSize: 13,
//     fontWeight: "600",
//     textAlign: "center",
//     marginTop: 16,
//   },
//   back: {
//     position: "absolute",
//     top: 16,
//     left: 16,
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: "rgba(21,22,48,0.1)",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   avatarPlaceholder: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#e1e2e6",
//     borderRadius: 50,
//     marginTop: 48,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   avatar: {
//     position: "absolute",
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
// });
// export default SignUp