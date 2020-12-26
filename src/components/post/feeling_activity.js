import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmojiSelector from 'react-native-emoji-selector';
//import Emojicon from 'react-native-emojicon';
import Emoji from 'react-native-emoji';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feeling } from './feeling';
import { Activity } from './activity';


const MainTopTab = createMaterialTopTabNavigator();

const Feeling_Activity = () => {
    const tabBarOptions = {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#FFFFFF',
        // inactiveTintColor: '#F8F8F8',
        style: {
            // backgroundColor: '#633689',
        },
        labelStyle: {
            textAlign: 'center',
        },
      
    }
    return (

        <MainTopTab.Navigator
            tabBarPosition="top"
            swipeEnabled={true}
            animationEnabled={true}
           // tabBarOptions={tabBarOptions}
        >
            <MainTopTab.Screen
                name="Cảm xúc"
                component={Feeling}
            />
            <MainTopTab.Screen
                name="Hoạt động"
                component={Activity}
            />

        </MainTopTab.Navigator>
    )
}
export { Feeling_Activity };