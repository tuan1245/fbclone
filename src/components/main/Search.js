import React from "react";
import { View, Text } from "react-native";
import { BackScreen } from "../tmp/BackScreen";

const Search = () => {
  return (
    <View style = {{backgroundColor : 'White'}}>
      <BackScreen />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
    </View>
    </View>
    
  );
};

export default Search;
