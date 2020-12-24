import React from "react";
import { View, Text } from "react-native";
import { BackScreen } from "../components/BackScreen";

const Search = () => {
  return (
    <View>
      <BackScreen />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
    </View>
    </View>
    
  );
};

export default Search;
