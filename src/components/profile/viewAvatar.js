import React, { Component, useRef, useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView,
    Dimensions, KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { PostAction } from '../post/redux/action';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;

const ViewAvatar = ({ route }) => {

    let [image, setImage] = useState(route.images)
    return (
        <>
            <View style={{ marginTop: "30%" }}>
                <Image
                    style={{ width: windowWidth, height: "80%" }}
                    source={
                        require('../../public/img/avt2.jpg')
                    }
                />
            </View>
        </>
    )
}

export { ViewAvatar }