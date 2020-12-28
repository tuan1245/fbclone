import React, { Component ,useEffect} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
// import { RowItem, RowSeparator } from "../components/RowItem";
import { NavBar } from "../tmp/NavBar";
import {
  Ionicons,
  Feather,
  Fontisto,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import colors from "../tmp/colors";
import { connect } from 'react-redux'
import { AuthActions } from "../auth/redux/action";
const screen = Dimensions.get("window");


const host = "https://fakebook-server.herokuapp.com"

const Menu = (props) => {
  const onPressLogOut = (e) =>{
    e.preventDefault();
    props.logout()
    props.navigation.replace("Đăng nhập")
  };

//   useEffect(() => {
//     props.navigation.replace("Đăng nhập")
// }, [props.auth.isLogout])
console.log("nnn", props.profile)


  return (
    <View>
      <NavBar />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity onPress={() => props.navigation.push("Search")}>
            <Ionicons
              name="md-search"
              size={28}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => props.navigation.push("Profile")}
        >
          <Image
            source={{uri: host + props.auth.user.avatar }}
            style={styles.avatar}
          />
          <View style={styles.textName}>
            <Text style={styles.name}>{props.auth.user.name }</Text>
            <Text style={styles.clicktoProfile}>Xem trang cá nhân của bạn</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <View style={styles.mainContents}>
          <View style={styles.leftContents}>
            <View style={styles.oneContent}>
              <Entypo name="save" size={24} color="#a64dff" />
              <Text style={styles.text}>Đã lưu</Text>
            </View>
            <View style={styles.oneContent}>
              <Entypo name="briefcase" size={24} color="#cc6600" />
              <Text style={styles.text}>Việc làm</Text>
            </View>
            <View style={styles.oneContent}>
              <FontAwesome name="group" size={24} color="#3399ff" />
              <Text style={styles.text}>Nhóm</Text>
            </View>
            <View style={styles.oneContent}>
              <Entypo name="heart" size={24} color="#e60073" />
              <Text style={styles.text}>Hẹn hò</Text>
            </View>
            <View style={styles.oneContent}>
              <MaterialIcons name="live-tv" size={24} color="#33bbff" />
              <Text style={styles.text}>Video trên Watch</Text>
            </View>
            <View style={styles.oneContent}>
              <FontAwesome name="flag" size={24} color="#ff9900" />
              <Text style={styles.text}>Trang</Text>
            </View>
          </View>
          <View style={styles.rightContents}>
            <View style={styles.oneContent}>
              <MaterialIcons name="event-available" size={24} color="#cc0000" />
              <Text style={styles.text}>Sự kiện</Text>
            </View>
            <View style={styles.oneContent}>
              <Ionicons name="ios-person-add" size={24} color="#1a75ff" />
              <Text style={styles.text}>Bạn bè quanh đây</Text>
            </View>
            <View style={styles.oneContent}>
              <Entypo name="game-controller" size={24} color="#1a75ff" />
              <Text style={styles.text}>Chơi game</Text>
            </View>
            <View style={styles.oneContent}>
              <Entypo name="shop" size={24} color="#1a75ff" />
              <Text style={styles.text}>Marketplace</Text>
            </View>
            <View style={styles.oneContent}>
              <Entypo name="back-in-time" size={24} color="#1a75ff" />
              <Text style={styles.text}>Kỷ niệm</Text>
            </View>
            <View style={styles.oneContent}>
              <MaterialCommunityIcons
                name="account-search"
                size={24}
                color="#1a75ff"
              />
              <Text style={styles.text}>Tìm kiếm bạn bè</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.moreApp}>
            <MaterialIcons name="more" size={28} color="#ff1a1a" />
            <Text style={styles.textBottom}>Xem thêm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBottomContent}>
            <MaterialCommunityIcons name="table-large-plus" size={28} color="#94b8b8" />
            <Text style={styles.textBottom}>Sản phẩm khác của Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBottomContent} onPress={()=>props.navigation.push("Help")}>
            <MaterialCommunityIcons name="help-circle" size={28} color="#94b8b8" />
            <Text style={styles.textBottom}>Trợ giúp & hỗ trợ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBottomContent}>
            <Fontisto name="player-settings" size={28} color="#94b8b8" />
            <Text style={styles.textBottom}>Cài đặt và quyền riêng tư</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.oneBottomContent} onPress={(e)=> onPressLogOut(e)}>
            <Entypo name="log-out" size={28} color="#94b8b8" />
            <Text style={styles.textBottom}>Đăng xuất</Text>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "white",
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
  profile: {
    flexDirection: "row",
  },
  avatar: {
    width: 45,
    height: 45,
    marginLeft: 20,
    borderRadius: 50,
  },
  textName: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  clicktoProfile: {
    fontSize: 16,
    color: colors.timestamp,
  },
  mainContents: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  leftContents: {
    // padding: 10,
    marginLeft: 10
  },
  rightContents: {
    marginRight: 10,
  },
  oneContent: {
    width: 180,
    height: 80,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.border,
    backgroundColor: "white",
    marginTop: 5,
    padding: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 1.0,
  },
  text: {
    fontWeight: "700",
  },
  separator: {
    width: screen.width * 0.92,
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: screen.width * 0.04,
    marginTop: 10,
  },
  bottom: {},
  moreApp:{
    flexDirection: "row",
    width: screen.width,
    height: 50,
    alignItems: "center",
    paddingLeft: 20,
  },
  oneBottomContent: {
    flexDirection: "row",
    width: screen.width,
    height: 50,
    alignItems: "center",
    paddingLeft: 20,
    borderTopWidth: 0.3,
    borderColor: 'gray',
    backgroundColor: '#f0f5f5'
  },
  textBottom: {
    marginLeft: 16,
    fontSize: 15,
    fontWeight:'bold'
  },
  space: {
    width: screen.width,
    height: 50,
  },
});

const mapStateToProps = state => {
  const { auth, profile } = state;
  return { auth, profile };
}
const mapActions = {
  logout: AuthActions.logout,
};

let connected = connect(mapStateToProps, mapActions)(Menu);

export { connected as Menu}

