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


const PreViewAvatar = (props) => {
    const [text, setText] = useState('');
    let [images, setImages] = useState(props.route.params.images)
    //   console.log('routtt', props.route)

    const onGoBack = () => {
        console.log('bacccccccccc', text);
        if (images.length > 0 || text) {
            sheetDraft.current.snapTo(1);

        }
        else {
            console.log('backkkkkkkk');
            props.navigation.goBack();
        }
    }

    const onPost = () => {
        console.log('ahihiihi', text, images);

        if (images.length !== 0 || text !== "") {
            let data = new FormData();

            data.append('described', text);

            data.append('post', images);
            console.log('dataaa', data)
            props.changeAvatar(data);
            props.navigation.goBack();
        }
        else {
            Alert.alert("Bài viết chưa có gì!");
        }
    }
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={{
                backgroundColor: "#fff", height: "8%", flexDirection: "row", marginBottom: 10,
                justifyContent: "space-between", alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => onGoBack()}
                >
                    <Icon5 name='arrow-left' size={20} color="#111" />
                </TouchableOpacity>
                <View style={{ width: "90%", backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Trang cá nhân</Text>
                    <TouchableOpacity style={{ backgroundColor: "#1578EF", padding: 5, borderRadius: 5, marginRight: 10 }}
                        onPress={onPost}
                    >
                        <Text style={{ fontWeight: "600", fontSize: 15, color: "#fff" }}>ĐĂNG</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>Đến:</Text>
                <Icon style={{ fontSize: 20, marginLeft: 10 }} name="ios-earth" />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>Công khai</Text>
            </View>
            <View>
                <Image
                    style={{ width: windowWidth, height: 400 }}
                    source={
                        { uri: images.uri }
                    }
                />
            </View>
            <View style={styles.option}>
                <View style={styles.detailOption}>
                    <Icon style={{ fontSize: 20 }} name="time-outline" />
                    <Text style={{ fontSize: 20 }}>Để tạm thời</Text>
                </View>
                <View style={styles.detailOption}>
                    <Icon style={{ fontSize: 20 }} name="ios-hammer" />
                    <Text style={{ fontSize: 20 }}>Thêm khung</Text>
                </View>
            </View>
            <View >
                <TextInput
                    style={{ fontSize: 22, height: 120 }}
                    placeholder="Hãy nói gì đó về ảnh đại diện của bạn..."
                    multiline={true}
                    //  backgroundColor="red"
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    option: {
        flexDirection: "row",
        width: "100%",
        height: "8%",
        marginTop: 10,
        marginBottom: 10,
    },
    detailOption: {
        flexDirection: "row",
        backgroundColor: "#dcdcdc",
        width: "40%",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }
})

const mapStateToProps = state => {
    const { post } = state;
    return { post };
}
const mapActions = {
    changeAvatar: PostAction.changeAvatar,
}
let connectCreatePost = connect(mapStateToProps, mapActions)(PreViewAvatar);

export { connectCreatePost as PreViewAvatar };
