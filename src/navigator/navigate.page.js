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
import Menu from "../components/main/Menu";
import SignUp from "../components/main/SignUp";
import Post from "../components/main/Post";

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
                {/* <Stack.Screen
                    name={pageName.main.MAIN}
                    component={MainContainer}
                    options={{ headerShown: false }}
                /> */}
                {/* xem bai viet */}
                {/* <Stack.Screen
                    name={pageName.feed.SINGLE_POST}
                    component={SinglePost}
                // options={{ headerShown: false }}
                /> */}



                {/* Search friend page */}
                {/* <Stack.Screen
                    name={pageName.main.SEARCH}
                    component={SearchPage}
                    options={{ headerTitle: "", headerShown: false }}
                /> */}

                {/* Friend tab */}
                {/* <Stack.Screen name={pageName.friend_tab.SHOW_ALL} component={AllRequest} />
                <Stack.Screen name={pageName.friend_tab.SUGGEST_FRIEND} component={SuggestFriend} />
                <Stack.Screen name={pageName.friend_tab.All_FRIEND} component={ListFriends} /> */}
                {/* <Stack.Screen name={pageName.feed.NEW_FEED} component={NewFeed} /> */}

                {/* watch tab */}
                {/* <Stack.Screen name={pageName.watch_tab.PLAY_VIDEO} component={ViewVideo}
                    options={{
                        // headerShown: false, 
                        headerTitle: "Xem video khác"
                    }}
                /> */}


                {/* Commments */}
                {/* <Stack.Screen name={pageName.comment.COMMENT} component={Comments}
                    options={{
                        headerShown: false,
                    }}
                /> */}

                {/* Đăng nhập */}
                {/* <Stack.Screen name={pageName.login_ACC_RECENTLY} component={LoginRecentlyAcc} /> */}
                {/* <Stack.Screen name={pageName.LOG_IN_NEW_ACC} component={LoginNewAccount} /> */}

                {/* Tạo tài khoản */}
                {/* <Stack.Screen name={pageName.sign_up.BEGIN} component={StartCreateAcc} />
                <Stack.Screen name={pageName.sign_up.NAME} component={Name} />
                <Stack.Screen name={pageName.sign_up.BIRTH} component={Birthday} />
                <Stack.Screen name={pageName.sign_up.PHONE} component={PhoneNumber} />
                <Stack.Screen name={pageName.sign_up.PASSWORD} component={Password} />
                <Stack.Screen name={pageName.sign_up.POLICY} component={Policy} />
                <Stack.Screen name={pageName.sign_up.CONFIRM} component={ConfirmAcc} />
                <Stack.Screen name={pageName.sign_up.REMIND} component={Remind} />
                <Stack.Screen name={pageName.sign_up.REMEMBER} component={Remember} /> */}
                <Stack.Screen name={"Test"} component={Test} />


                {/*Tạo bài viết*/}
                {/* <Stack.Screen name={pageName.post_NEW_POST} component={CreatePost}
                    options={{ headerTitle: "", headerShown: false }} />
                <Stack.Screen name={pageName.post_feeling} component={Feeling} />
                <Stack.Screen name={pageName.post_activity} component={Activity} />
                <Stack.Screen name={pageName.post_feeling_activity} component={Feeling_Activity} /> */}

                {/* Trang cá nhân */}
                {/* <Stack.Screen name={pageName.profile} component={Profile} />
                <Stack.Screen name={pageName.preview_avatar} component={PreViewAvatar}
                    options={{ headerTitle: "", headerShown: false }}
                />
                <Stack.Screen name={pageName.view_avatar} component={ViewAvatar} /> */}

                {/* báo cáo bài viết */}
                {/* <Stack.Screen name={pageName.report.REPORT_POST} component={ReportPost} />
                <Stack.Screen name={pageName.report.CONFIRM_REPORT} component={ConfirmReport} />
                <Stack.Screen name={pageName.post_advanced_option}
                    options={{
                        headerShown: false,
                    }}
                    component={Advanced} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { Navigate };
