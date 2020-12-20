import React, { Component } from "react";
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
import Fire from "../Fire";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { OneFriend } from "../components/OneFriend";

const screen = Dimensions.get("window");
data = [
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
  { id: "1", name: "Phạm Mỹ Linh", number: "100 bạn chung" },
];
export default class ProfileScreen extends Component {
  state = {
    user: {},
  };
  unsubscribe = null;

  componentDidMount() {
    const user = this.props.uid || Fire.shared.uid;
    this.unsubscribe = Fire.shared.firestore
      .collection("users")
      .doc(user)
      .onSnapshot((doc) => {
        this.setState({ user: doc.data() });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  renderFriend = (friend) => {
    return (
      <View>
        <OneFriend item={friend} onPress={() => alert("One Friend")} />
      </View>
    );
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../assets/images/tempImage1.jpg")}
              style={styles.bkground}
            />
            <Image
              style={styles.avatar}
              source={
                this.state.user.avatar
                  ? { uri: this.state.user.avatar }
                  : require("../assets/images/avatar.png")
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
          <Text style={styles.name}>{this.state.user.name}</Text>
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
                renderItem={({ item }) => this.renderFriend(item)}
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
        </ScrollView>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => Fire.shared.signOut()}
        >
          <Text style={{ color: "grey", fontWeight: "500" }}>Log out</Text>
        </TouchableOpacity> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
