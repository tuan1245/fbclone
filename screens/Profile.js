import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
export default function Profile() {
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
