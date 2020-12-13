import React from "react";
import { Button, View, Text } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
const SignIn = ({ navigation }) => {
  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("123@gmail.com", "123456")
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("Sign Up")}
      />
      <Button title="Sign In With fake acc" onPress={signIn} />
    </View>
  );
};

export default SignIn;
