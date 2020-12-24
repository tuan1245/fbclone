import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Noti, Post, Profile, Search, SignIn, SignUp, Chat, Menu, Friends, Help} from "./screens";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  });
  return (
    <NavigationContainer>
      
      {isAuth ? (
        
        <Stack.Navigator
        headerMode="none"
        >
          <Stack.Screen
            name="Home"
            component={Home}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="ios-home" size={size} color={color} />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Noti"
            component={Noti}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons
            //       name="ios-notifications-outline"
            //       size={size}
            //       color={color}
            //     />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     // <Ionicons name="ios-search" size={size} color={color} />
            //     <Fontisto
            //     name="messenger"
            //     size={size}
            //     color={color}
            //   />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="ios-add" size={size} color={color} />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="md-person" size={size} color={color} />
            //   ),
            // }}
          />
           <Stack.Screen
            name="Search"
            component={Search}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="md-person" size={size} color={color} />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="md-person" size={size} color={color} />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Friends"
            component={Friends}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="md-person" size={size} color={color} />
            //   ),
            // }}
          />
          <Stack.Screen
            name="Help"
            component={Help}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Ionicons name="md-person" size={size} color={color} />
            //   ),
            // }}
          />
          
        </Stack.Navigator>
      ) : (
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen name="Sign In" component={SignIn} />
          <AuthStack.Screen name="Sign Up" component={SignUp} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
