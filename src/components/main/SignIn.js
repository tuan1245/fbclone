import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  LayoutAnimation,
  ImageBackground,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase/app";
import "firebase/auth";

export default class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          style={{
            flex: 1,
            width: "100%",
            height: "auto",
            justifyContent: "center",
          }}
          imageStyle={
            {width: "auto",
            height: "33.6%"}
          }
        >
          <Text style={styles.greeting}>
            {" "}
            {``}{" "}
          </Text>
          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
              ></TextInput>
            </View>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{ color: "white", fontWeight: "500" }}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("Sign Up")}
          >
            <Text style={{ color: "#3971bf", fontSize: 12 }}>
              {`Create New Account `}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    color: "#FFF",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 48,
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
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
