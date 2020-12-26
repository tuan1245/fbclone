import React, { Component, useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmojiSelector from 'react-native-emoji-selector';
//import Emojicon from 'react-native-emojicon';
import Emoji from 'react-native-emoji';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GridImage = (props) => {
    const [update, setUpdate] = useState(false);
    const size = props.array.length;
    let array = props.array;

    const onPress1 = () => {
        array.splice(0, 1);
        props.onChangeImage(array);

        // props.onChangeImage(props.array.splice(0, 1))
    }
    const onPress2 = () => {
        array.splice(1, 1)
        //console.log("rest", a);
        props.onChangeImage(array);
    }
    if (size === 0) {
        return (
            <>
            </>
        )
    }
    else if (size === 1) {
        return (
            <View>
                <Image
                    style={{ width: windowWidth, height: 400 }}
                    source={
                        { uri: `https://fakebook-server.herokuapp.com${props.array[0]}` }
                    }
                />

                {/* <TouchableOpacity style={styles.delete} onPress={props.onDelete1}>
                    <Icon name="times-circle" style={styles.icon_delete}></Icon>
                </TouchableOpacity> */}

            </View>
        )
    }

    else if (size === 2) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image
                        style={{ width: 190, height: 400 }}
                        source={
                            { uri: `https://fakebook-server.herokuapp.com${props.array[0]}` }
                        }
                    />
                    {/* <TouchableOpacity style={styles.delete} onPress={onPress1}>
                        <Icon name="times-circle" style={styles.icon_delete}></Icon>
                    </TouchableOpacity> */}
                </View>
                <View style={{ marginLeft: 5 }}>
                    <Image
                        style={{ width: 190, height: 400 }}
                        source={
                            { uri: `https://fakebook-server.herokuapp.com${props.array[1]}` }
                        }
                    />
                    {/* <TouchableOpacity style={styles.delete} onPress={onPress2}>
                        <Icon name="times-circle" style={styles.icon_delete}></Icon>
                    </TouchableOpacity> */}
                </View>

            </View>
        )
    }
    else if (size === 3) {
        return (
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Image
                        style={{ width: 190, height: 400 }}
                        source={
                            { uri: `https://fakebook-server.herokuapp.com${props.array[0]}` }
                        }
                    />
                </View>
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                    <View>
                        <Image
                            style={{ width: 190, height: 200 }}
                            source={
                                { uri: `https://fakebook-server.herokuapp.com${props.array[1]}` }
                            }
                        />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Image
                            style={{ width: 190, height: 200 }}
                            source={
                                { uri: `https://fakebook-server.herokuapp.com${props.array[2]}` }
                            }
                        />
                    </View>
                </View>



            </View>
        )
    }
    else {
        return (
            <View style={{}}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image
                            style={{ width: 190, height: 200 }}
                            source={
                                { uri: `https://fakebook-server.herokuapp.com${props.array[0]}` }
                            }
                        />
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <Image
                            style={{ width: 190, height: 200 }}
                            source={
                                { uri: `https://fakebook-server.herokuapp.com${props.array[1]}` }
                            }
                        />
                    </View>

                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View>
                        <Image
                            style={{ width: 190, height: 200 }}
                            source={
                                { uri: `https://fakebook-server.herokuapp.com${props.array[2]}` }
                            }
                        />
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <Image
                            style={{ width: 190, height: 200 }}
                            source={
                                { uri: `https://fakebook-server.herokuapp.com${props.array[3]}` }
                            }
                        />
                    </View>

                </View>

            </View>
        )
    }


}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,

    // },
    p1: {
        flex: 0.7,
        height: 75,
        width: 400,
        flexDirection: 'row',

    },

    picture: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderRadius: 25,
    },
    name: {
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'column'
    },
    p2: {
        flex: 6,
    },
    p3: {
        flex: 0.4,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        fontSize: 25,
        // backgroundColor: "blue",
    },
    img: {

        width: windowWidth,
        height: 300,
    },
    icon_create_room: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    icon_image: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    icon_: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    // create_room: {
    //     color: `#6495ed`,
    //     fontSize: 20,
    //     textAlignVertical: "center",
    //     // marginLeft: 3,
    //     marginRight: 10,
    // },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop: 10,
    },
    delete: {
        position: 'absolute',
        // backgroundColor: "red",
        alignSelf: "flex-end",
        width: 30,
        height: 30,
        marginTop: 10,
        marginRight: 15,
    },
    icon_delete: {
        fontSize: 30,
        color: "#dcdcdc",
    }

})


export { GridImage };