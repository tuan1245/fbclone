import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmojiSelector from 'react-native-emoji-selector';
//import Emojicon from 'react-native-emojicon';
import Emoji from 'react-native-emoji';
import { FlatList } from 'react-native-gesture-handler';
import { pageName } from '../../navigator/constant.page'
const Activity = ({ navigation }) => {

    const onPressFeeling = () => {
        navigation.navigate(pageName.post_NEW_POST)
    }
    const data = [

        {
            "id": 1,
            "status": "Đang chúc mừng...",
            "icon": "beers",
        },
        {
            "id": 2,
            "status": "Đang xem...",
            "icon": "eyeglasses",

        },
        {
            "id": 3,
            "status": "Đang ăn...",
            "icon": "doughnut",

        },
        {
            "id": 4,
            "status": "Đang tham gia...",
            "icon": "bikini",

        },
        {
            "id": 5,
            "status": "Đang đi tới...",
            "icon": "airplane",
        },
        {
            "id": 6,
            "status": "Đang nghe...",
            "icon": "headphones",

        },
        {
            "id": 7,
            "status": "Đang tìm...",
            "icon": "old_key",

        },
        {
            "id": 8,
            "status": "Đang nghĩ về...",
            "icon": "right_anger_bubble",

        },
    ];
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    const Item = ({ item }) => (
        <View style={styles.items}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPressFeeling}>
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
        color: `#6495ed`,
        fontSize: 20,
    }

})

export { Activity };