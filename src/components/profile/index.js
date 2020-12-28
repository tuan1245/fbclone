import React, { Component, useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView, Dimensions, FlatList, RefreshControl } from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { Feed } from '../new-feed/feed';
import { ToolBar } from '../new-feed/toolBar';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import ImagePicker from 'react-native-image-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { pageName } from '../../navigator/constant.page'
import { connect } from 'react-redux';
import { PostAction } from '../post/redux/action';


const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Profile = (props) => {

    const { navigation, auth } = props;

    useEffect(() => {
        props.getPostByUser();
    }, []);

    let [ShowComment, setShowModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(true);

    let [ShowEditWall, setShowEditWall] = useState(false);
    let [animateModalWall, setanimateWallModal] = useState(true);
    let [avatar, setAvatar] = useState(true);
    const onPressAvatar = () => {
        setShowModelComment(true);
        // setanimateModal(true);
        console.log('pressssssssss', ShowComment);
    }
    const onPressWall = () => {
        setShowEditWall(true);
    }

    const DATA = [
        {
            id: '1',
            title: 'Thêm khung',
            icon: "windows"
        },
        {
            id: '2',
            title: 'Quay video đại diện mới',
            icon: "video-camera"
        },
        {
            id: '3',
            title: 'Chọn video đại diện',
            icon: "youtube-play"
        },
        {
            id: '4',
            title: 'Chọn ảnh đại diện',
            icon: "image"
        },
        {
            id: '5',
            title: 'Xem ảnh đại diện',
            icon: "id-badge"
        },
        {
            id: '6',
            title: 'Tắt Bảo vệ ảnh đại diện',
            icon: "shield"
        },
        {
            id: '7',
            title: 'Thêm thiết kế',
            icon: "magic"
        },
        {
            id: '8',
            title: 'Đặt avatar làm ảnh đại diện',
            icon: "github-alt"
        },
    ];
    const DATAWALL = [
        {
            id: '1',
            title: 'Xem ảnh bìa',
            icon: "image"
        },
        {
            id: '2',
            title: 'Tải ảnh lên',
            icon: "upload"
        },
        {
            id: '3',
            title: 'Chọn ảnh trên facebook',
            icon: "facebook-f"
        },
        {
            id: '4',
            title: 'Tạo nhóm ảnh bìa',
            icon: "windows"
        },
        {
            id: '5',
            title: 'Chọn ảnh nghệ thuật',
            icon: "magic"
        },
    ]
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    const Item = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => onPressAvartar(item.id)}>
            <Icon name={item.icon} style={styles.icon}></Icon>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    const onPressAvartar = (option) => {
        setShowModelComment(false);
        console.log('aaaaaaaaaa', option);
        if (option === "4") {

            let mediaType;
            ImagePicker.showImagePicker({
                title: 'Chọn ảnh đại diện',
                mediaType: 'photo',
                takePhotoButtonTitle: null,
                chooseFromLibraryButtonTitle: null,
                customButtons: [
                    {
                        name: 'myPhotoFromCamera',
                        title: 'Chụp ảnh',
                    },

                    {
                        name: 'mylibrary',
                        title: 'Thư viện',
                    },
                ],
            }, (response) => {

                if (response.customButton === 'myPhotoFromCamera') {
                    ImagePicker.launchCamera({
                        storageOptions: {
                            path: 'PhotoCamera',
                        },
                        mediaType: 'photo',
                    }, (myResponse) => {
                        if (myResponse.didCancel) {

                        } else if (myResponse.error) {

                        } else {

                            const source = {
                                uri: myResponse.uri,
                                type: myResponse.type,
                                name: myResponse.fileName
                            };
                            console.log('srr', source)
                            setAvatar(source);
                        }
                    });
                } else if (response.customButton === 'mylibrary') {
                    ImagePicker.launchImageLibrary({
                        storageOptions: {
                            path: 'library',
                        },
                        mediaType: 'photo',
                    }, (myResponse) => {
                        if (myResponse.didCancel) {

                        } else if (myResponse.error) {

                        } else {
                            const source = {
                                uri: myResponse.uri,
                                type: myResponse.type,
                                name: myResponse.fileName
                            };
                            console.log('srccccc', source)
                            console.log('srr', source)
                            setAvatar(source);

                            navigation.navigate(pageName.preview_avatar, { images: source })

                        }
                    });
                }
            });
        }
        else if (option === "5") {
            navigation.navigate(pageName.view_avatar, { images: avatar });

        }

    }

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        props.getPostByUser();
        console.log('refresh trang cá nhân');

        // check data return isLoading === false;
        wait(2000).then(() => {
            console.log('done');
            setRefreshing(false)

        });
    }, []);

    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: "#fff" }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={onPressWall}>
                        <Image
                            style={styles.wall}
                            source={
                                require('../../public/img/barca_logo2.jpg')
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.avtframe}
                        onPress={onPressAvatar}
                    >
                        <Image
                            style={styles.avatar}
                            // source={
                            //     require('../../public/img/avt2.jpg')
                            // }
                            source={{ uri: `https://fakebook-server.herokuapp.com${auth.profile?.avatar}` }}
                        />


                    </TouchableOpacity>
                    {/* <View style={styles.camera}>

                    </View> */}
                    <Text style={styles.name}>{auth?.profile?.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.addStory}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>Thêm vào tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Text style={{ fontWeight: "700" }}>...</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.lineStyle} />
                <View style={{
                    marginLeft: 10
                }}
                >
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Icon name="graduation-cap" style={styles.icon} color={"#878E8E"}></Icon>
                        <Text style={styles.textProfile}>Học tại </Text>
                        <Text style={styles.textProfile1}>Đại học Bách Khoa Hà Nội</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Icon name="home" style={styles.icon} color={"#878E8E"} ></Icon>
                        <Text style={styles.textProfile}>Sống tại </Text>
                        <Text style={styles.textProfile1}>Hà Nội</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        <Icon name="calendar-times-o" style={styles.icon} color={"#878E8E"}></Icon>
                        <Text style={styles.textProfile}>Tham gia vào tháng 3 năm 2016 </Text>
                        {/* <Text style={styles.textProfile1}>Hà Nội</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, }}>
                        {/* <Icon name="dots-three-horizontal" style={styles.icon}></Icon> */}
                        <Text style={styles.icon} >...</Text>
                        <Text style={styles.textProfile}>Xem thông tin giới thiệu của bạn</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.editProfile, { backgroundColor: `#E5F3FC` }]}>
                            <Text style={{ fontWeight: "700", color: "#1578EF", fontSize: 15 }}>Chỉnh sửa chi tiết công khai</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bạn bè</Text>
                        <Text style={{ fontSize: 18, color: "#1578EF" }}>Tìm bạn bè</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/assets/logo.png')
                                    }
                                />
                                <Text>Quang</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/avt2.jpg')
                                    }
                                />
                                <Text>Tuấn Anh</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/assets/story1.jpg')
                                    }
                                />
                                <Text>Linh</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/create_acc.png')
                                    }
                                />
                                <Text>Hùng</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/assets/story4.jpg')
                                    }
                                />
                                <Text>Vượng</Text>
                            </View>
                            <View style={styles.paddingFriend}>
                                <Image
                                    style={styles.avatarFriend}
                                    source={
                                        require('../../public/img/fb_reg.png')
                                    }
                                />
                                <Text>Đức</Text>
                            </View>

                        </View>
                    </View>
                    <TouchableOpacity style={[styles.editProfile, { backgroundColor: `#E2E7E7` }]}>
                        <Text style={{ fontWeight: "bold", color: "#111", fontSize: 15 }}>Xem chi tiết bạn bè</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigLineStyle} />
                <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
                    <ToolBar navigation={navigation} />
                </View>
                {/* <View style={styles.bigLineStyle} /> */}
                <View style={{ backgroundColor: "#fff" }}>
                    <Feed isProfile={true} />
                </View>

                {/* <SwipeImage show={ShowComment}
                    animateModal={animateModal} /> */}
                <SwipeUpDownModal
                    modalVisible={ShowComment}
                    PressToanimate={true}
                    //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
                    ContentModal={
                        <View style={styles.containerContent}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    }
                    HeaderStyle={styles.headerContent}
                    ContentModalStyle={styles.Modal}
                    HeaderContent={
                        <View style={styles.containerHeader}>
                            <Icon3 name="minus" />
                        </View>
                    }
                    onClose={() => {
                        setShowModelComment(false);
                        setanimateModal(false);
                    }}
                />
                <SwipeUpDownModal
                    modalVisible={ShowEditWall}
                    PressToanimate={true}
                    //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
                    ContentModal={
                        <View style={styles.containerContentWall}>
                            <FlatList
                                data={DATAWALL}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </View>
                    }
                    HeaderStyle={styles.headerContentWall}
                    ContentModalStyle={styles.ModalWall}
                    HeaderContent={
                        <View style={styles.containerHeaderWall}>
                            <Icon3 name="minus" />
                        </View>
                    }
                    onClose={() => {
                        setShowEditWall(false);
                        setanimateWallModal(false);
                    }}
                />
            </ScrollView>

        </>
    )
}


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        // position: 'absolute',
        height: 450,
        // backgroundColor: "yellow",
    },
    wall: {
        marginTop: 10,
        width: 370,
        height: 240,
        borderRadius: 10,
        // zIndex: 1
    },
    avatar: {
        width: "95%",
        height: "95%",
        borderRadius: 100,
        position: 'absolute',
        //marginTop: 170,
        // backgroundColor: "red"
    },
    avtframe: {
        width: 180,
        height: 180,
        borderRadius: 90,
        position: 'absolute',
        marginTop: 150,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        position: 'absolute',
        backgroundColor: "red",
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 250,
        //marginLeft: 300,
    },
    name: {
        marginTop: 100,
        fontWeight: 'bold',
        fontSize: 30
    },
    addStory: {
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: `#1578EF`,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    more: {
        width: 50,
        height: 40,
        borderRadius: 10,
        backgroundColor: `#E2E7E7`,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#dcdcdc',
        marginTop: 10,
    },
    bigLineStyle: {
        borderWidth: 5,
        borderColor: '#f1f1f1',
        marginTop: 10,
    },
    icon: {
        color: "#878E8E",
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
        marginLeft: 10,
    },
    textProfile: {
        fontSize: 20
    },
    textProfile1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    editProfile: {
        width: "93%",
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 10,
    },
    paddingFriend: {
        flexDirection: "column",
        marginLeft: 20,
        marginTop: 10,
        // width: 120,
        // height: 120,
    },
    avatarFriend: {
        width: 100,
        height: 100,
        borderRadius: 10,
        // marginLeft: 20,
        //, marginTop: 10,
    },
    containerContent: { flex: 1, marginTop: 40 },
    containerHeader: {
        // flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
    },
    headerContent: {
        marginTop: (windowHeight - 470),
    },
    Modal: {
        backgroundColor: '#f8f8ff',
        marginTop: (windowHeight - 470),
    },
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        backgroundColor: '#f8f8ff',
        padding: 13,
        //marginVertical: 8,
        //marginHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
    },
    containerContentWall: { flex: 1, marginTop: 40 },
    containerHeaderWall: {
        // flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#f8f8ff',
        borderRadius: 10,
    },
    headerContentWall: {
        marginTop: (windowHeight - 300),
    },
    ModalWall: {
        backgroundColor: '#f8f8ff',
        marginTop: (windowHeight - 300),
    },

})


const mapStateToProps = state => {
    const { auth, post } = state;
    return { auth, post };
}
const mapActions = {
    getPostByUser: PostAction.getPostByUser,
};

let connected = connect(mapStateToProps, mapActions)(Profile);

export { connected as Profile }
// export { Profile }