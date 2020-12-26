import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmojiSelector from 'react-native-emoji-selector';
//import Emojicon from 'react-native-emojicon';
import Emoji from 'react-native-emoji';
import { FlatList } from 'react-native-gesture-handler';
import { pageName } from '../../navigator/constant.page'
const Feeling = ({ navigation }) => {

    const onPressFeeling = (item) => {
        //console.log('iiiiiiiiiiiiiiiiiiiii', item)
        navigation.navigate(pageName.post_NEW_POST, item)
    }
    const onPressActivity = (item) => {
        navigation.navigate(pageName.post_activity)
    }
    const data = [
        {
            "id": 1,
            "status": "hạnh phúc",
            "icon": "slightly_smiling_face",
        },
        {
            "id": 2,
            "status": "có phúc",
            "icon": "innocent",

        },
        {
            "id": 3,
            "status": "được yêu",
            "icon": "innocent",

        },
        {
            "id": 4,
            "status": "buồn",
            "icon": "slightly_frowning_face",

        },
        {
            "id": 5,
            "status": "đáng yêu",
            "icon": "blush",
        },
        {
            "id": 6,
            "status": "Biết ơn",
            "icon": "smiley",

        },
        {
            "id": 7,
            "status": "điên",
            "icon": "zany_face",

        },
        {
            "id": 8,
            "status": "cảm kích",
            "icon": "the_horns",

        },
        {
            "id": 9,
            "status": "sung sướng",
            "icon": "the_horns",
        },
        {
            "id": 10,
            "status": "tuyệt vời",
            "icon": "kissing_heart",
        },
        {
            "id": 11,
            "status": "ngốc nghếch",
            "icon": "zany_face",
        },
        {
            "id": 12,
            "status": "vui vẻ",
            "icon": "slightly_smiling_face",

        },
        {
            "id": 13,
            "status": "tuyệt vời",
            "icon": "kissing_closed_eyes",

        },
        {
            "id": 14,
            "status": "thật phong cách",
            "icon": "i_love_you_hand_sign",

        },
        {
            "id": 15,
            "status": "thú vị",
            "icon": "thinking_face",
        },
        {
            "id": 16,
            "status": "thư giãn",
            "icon": "relieved",
        },
    ];
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    const Item = ({ item }) => (
        <View style={styles.items}>
            <TouchableOpacity style={{ flexDirection: 'row' }}
                onPress={() => onPressFeeling(item)}
            >
                <Emoji name={item.icon} style={{ fontSize: 20 }} />
                <Text style={styles.status}>{item.status}</Text>
            </TouchableOpacity>

        </View>
    );

    return (


        <>
            <View>
                <TextInput
                    placeholder="Tìm kiếm?"
                />
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                marginBottom: 40
            }}>
                <FlatList
                    //style={{ backgroundColor: "blue" }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    horizontal={false}

                />
            </View>

        </>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        // backgroundColor: "blue",
        justifyContent: "space-around",
    },
    feeling: {

    },
    items: {
        maxWidth: Dimensions.get('window').width / 2,
        flex: 0.5,
        padding: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#a9a9a9",
    },
    status: {
        fontSize: 20,
        marginLeft: 10,
    },
    icon: {
        color: `#ffd700`,
        fontSize: 30,
        // marginRight: 10,
    }

})

export { Feeling };