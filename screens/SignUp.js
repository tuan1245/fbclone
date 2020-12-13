import React from "react";
import { View, Text, Button } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("Sign In")}
      />
    </View>
  );
};

export default SignUp;
