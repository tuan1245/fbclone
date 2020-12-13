import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Home, Noti, Post, Profile, Search, SignIn, SignUp } from "./screens";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();
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
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Noti"
            component={Noti}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="ios-notifications-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-search" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={Post}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-add" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="md-person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator
          headerMode="screen"
          screenOptions={{ headerTitleAlign: "center" }}
        >
          <AuthStack.Screen name="Sign In" component={SignIn} />
          <AuthStack.Screen name="Sign Up" component={SignUp} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
