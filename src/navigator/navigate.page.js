/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { pageName } from './constant.page';

import {
    // Login
    LoginNewAccount,
    // LoginRecentlyAcc,


    // Sign up
    Birthday,
    Name,
    Password,
    PhoneNumber,
    Policy,
    ConfirmAcc,
    Remind,
    Remember,
    StartCreateAcc,
    

    // // create post
    // CreatePost,
    // Feeling,
    // Activity,
    // Feeling_Activity,
    // SinglePost,

    // // comments
    // Comments,

    // // Report Post
    // ReportPost,
    // ConfirmReport,
    // Advanced,

    // //profile
    // Profile,
    // PreViewAvatar,
    // ViewAvatar,
    // // Main content
    // MainContainer,

    // // Friend_tab
    // AllRequest,
    // SuggestFriend,
    // ListFriends,

    // // search friend page
    // SearchPage,
    // ViewVideo,
    // Welcome,


} from '../components';
import  Test  from "../components/auth/login/Test.js";
import {Home} from "../components/main/Home.js";
import Friends from "../components/main/Friends.js";
import Noti from "../components/main/Noti";
import {Menu} from "../components/main/Menu";
import {SignUp} from "../components/main/SignUp";
import {Post} from "../components/main/Post";
import {CreatePost} from "../components/main/create-post";
import {Profile} from "../components/main/Profile";
import {Comment} from "../components/main/Comment";
import Search from "../components/main/Search";
import Help from "../components/main/Help";
import Watch from "../components/main/Watch";
import Tinder from "../components/main/Tinder";
const Stack = createStackNavigator();
const Navigate = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator
            screenOptions = {
                {
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS
                }
            }
            headerMode="float"
            animation="fade"
            >

                {/* <Stack.Screen
                    name={pageName.WELCOME}
                    component={Welcome}
                    options={{ headerShown: false }}
                /> */}

                <Stack.Screen
                    name={pageName.LOG_IN_NEW_ACC}
                    component={LoginNewAccount}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={"Home"}
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={"Friends"}
                    component={Friends}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Noti"}
                    component={Noti}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={"Menu"}
                    component={Menu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"SignUp"}
                    component={SignUp}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={"Post"}
                    component={Post}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"CreatePost"}
                    component={CreatePost}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Profile"}
                    component={Profile}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Comment"}
                    component={Comment}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Search"}
                    component={Search}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Help"}
                    component={Help}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Watch"}
                    component={Watch}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={"Tinder"}
                    component={Tinder}
                    options={{ headerShown: false }}
                />
                

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigate };
