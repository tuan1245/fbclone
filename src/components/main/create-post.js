import React, { Component, useEffect, useRef, useState } from 'react';
import mime from "mime";
import {
    Button, StyleSheet, View, Text, TextInput, Image, Keyboard,
    TouchableOpacity, ScrollView, Dimensions, Alert, ActivityIndicator
} from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { Controller, useForm } from 'react-hook-form';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ImagePicker from 'react-native-image-picker';
// import VideoPlayer from 'react-native-video-player';
// import * as ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { pageName } from '../../navigator/constant.page'
// import { GridImage } from './gridImage';
import Emoji from 'react-native-emoji';
//import { Draft } from './draft';
import { PostAction } from '../post/redux/action';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const windowWidth = Dimensions.get('window').width;
const CreatePost = (props) => {

    const sheetRef = useRef(null);
    const sheetDraft = useRef(null);
    const [text, setText] = useState('');
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);
    // const { control, handleSubmit } = useForm();
    let gridImages = null;
    const [mediaStatus, setMediaStatus] = useState(null);
    const [feeling, setFeeling] = useState({
        title: "",
        icon: "",
        type: "",
    });
    // const { form, handleSubmit, setValue } = useForm();


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

    const [isPosting, setIsPosting] = useState(false);
    const onPost = () => {
        console.log('ahihiihi', text, images);

        if (images.length !== 0 || text !== "") {
            let data = new FormData();

            data.append('described', text);
            for (let i in images) {
                data.append('post', images[i]);
            }
            console.log('dataaa', data)
            props.post(data);
            // props.getAllPost();
            // props.getPostByUser();
            console.log('isLoadingPost', props.post.isLoadingPost);
            {
                // props.post?.isLoadingPost && 
                props.navigation.goBack();
            
            }
            
        }
        else {
            Alert.alert("Bài viết chưa có gì!");
        }
    }
    React.useEffect(() => {
        if (props.route.params) {
            setFeeling({
                title: props.route.params.status,
                icon: props.route.params.icon,
                type: 1,
            })
        }

    }, [props.route.params]);

    React.useEffect(() => {
        setText(text);

    }, [text]);
    // console.log('routtt', props.route.params);

    // React.useEffect(() => {
    //     {props.post.isLoadingPost && props.navigation.goBack();}
    // });

    const renderContent = () => (
        <View
            style={{
                backgroundColor: '#FDFFFD',
                padding: 20,
                height: 400,
            }}
        >

            <View >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="video-camera" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Tạo phòng họp mặt</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={pickImage}>
                    <Icon name="image" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Ảnh/Video</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={onPressFeeling}>
                    <Icon name="smile-o" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Cảm xúc/Hoạt động</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="check-circle" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Check in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineStyle} />
            <View
                style={{ marginTop: 20 }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name="file-video-o" style={styles.icon_create_room}></Icon>
                    <Text style={{ fontSize: 22, }}>Video trực tiếp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const Draft = () => {
        return (
            <View style={{
                backgroundColor: '#FDFFFD',
                padding: 20,
                height: 300,
            }}>
                <View>
                    <Text style={{
                        fontSize: 17
                    }}>Bạn muốn hoàn thành bài viết của mình sau?</Text>
                    <Text style={{
                        fontSize: 14,
                        color: "#a9a9a9",
                        marginTop: 10,
                    }}>Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", marginTop: 15 }}>
                    <Icon3 name="tagso" style={{ fontSize: 45 }} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            fontSize: 17
                        }}>Lưu làm bản nháp</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#a9a9a9",
                            marginTop: 3,
                        }}>Bạn sẽ nhận được thông báo về bản nháp</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
                    onPress={() => { props.navigation.goBack() }}
                >
                    <Ionicons name="trash-outline" style={{ fontSize: 45 }} />
                    <Text style={{
                        fontSize: 17
                    }}>Bỏ bài viết</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
                    onPress={() => { sheetDraft.current.snapTo(0); }}
                >
                    <Ionicons name="checkmark" style={{ fontSize: 45, color: "#1e90ff" }} />
                    <Text style={{
                        fontSize: 17,
                        color: "#1e90ff"
                    }}>Tiếp tục chỉnh sửa</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const onPressFeeling = () => {
        props.navigation.navigate(pageName.post_feeling_activity)
    }

    const onPressTextInput = () => {
        sheetRef.current.snapTo(2)
    }

    let imageGrid = null;
    // console.log('textttt', images);
    if (images.length !== 0) {
        console.log("thanh hung ", images.length, images[0].uri)
        
        gridImages = (
        
            <View>
                <View style={styles.gridImagesViewLine}>
                    <View style={styles.gridImagesViewView}>
                        <Image
                            source={{uri: images[0].uri}} 
                            style={styles.gridImagesImage}
                        />
                        <View style={styles.gridImagesViewIcon}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (images.length === 1) {
                                        setMediaStatus(null);
                                        setImages([]);
                                        //setValue("images", []);
                                    } else {
                                        const newImages = [...images];
                                        newImages.splice(0, 1);
                                        //setValue("images", newImages);

                                        setImages(newImages);
                                    }
                                }}
                            >
                                {/* <Ionicons name="close" color="red" size={24} /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.gridImagesViewView}>
                        {images[1] ? (
                            <>
                                <Image
                                    source={images[1]}
                                    style={styles.gridImagesImage}
                                />
                                <View style={styles.gridImagesViewIcon}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newImages = [...images];
                                            newImages.splice(1, 1);
                                            setImages(newImages);
                                        }}
                                    >
                                        <Ionicons name="close" color="red" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('../../public/img/fb_reg.png')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                </View>
                <View style={styles.gridImagesViewLine}>
                    <View style={styles.gridImagesViewView}>
                        {images[2] ? (
                            <>
                                <Image
                                    source={images[2]}
                                    style={styles.gridImagesImage}
                                />
                                <View style={styles.gridImagesViewIcon}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newImages = [...images];
                                            newImages.splice(2, 1);
                                            setImages(newImages);
                                        }}
                                    >
                                        <Ionicons name="close" color="red" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('../../public/img/fb_reg.png')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                    <View style={styles.gridImagesViewView}>
                        {images[3] ? (
                            <>
                                <Image
                                    source={images[3]}
                                    style={styles.gridImagesImage}
                                />
                                <View style={styles.gridImagesViewIcon}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            const newImages = [...images];
                                            newImages.splice(3, 1);
                                            setImages(newImages);
                                        }}
                                    >
                                        <Ionicons name="close" color="red" size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('../../public/img/fb_reg.png')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                </View>
            </View>
        );
    }
    const pickImage = async () => {
        let myResponse = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
        //   allowsEditing: true,
        //   aspect: [4, 3],
          quality: 1,
        });
    
        console.log("thanh ",myResponse);
    
        if (!myResponse.cancelled) {

const newImageUri =  "file:///" + myResponse.uri.split("file:/").join("");

            const source = {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop()
            };
            console.log('srccccc', source)
            const type = myResponse.type;
            console.log('srr', source)
            setImages([...images, source]);
        }




         
        
      };
    const chooseFile = () => {
        ImagePicker.showImagePicker({
            title: 'Ảnh/Video',
            mediaType: 'mixed',
            takePhotoButtonTitle: null,
            chooseFromLibraryButtonTitle: null,
            customButtons: [
                {
                    name: 'myPhotoFromCamera',
                    title: 'Chụp ảnh',
                },
                {
                    name: 'myVideoFromCamera',
                    title: 'Quay video',
                },
                {
                    name: 'mylibrary',
                    title: 'Thư viện',
                },
            ],
        }, (response) => {
            if (response.customButton) {
                if (images.length >= 4) {
                    // eslint-disable-next-line no-alert
                    alert('Hệ thống cho phép đăng tải tối đa 4 ảnh!');
                    return;
                }
                if (mediaStatus === 'video') {
                    // eslint-disable-next-line no-alert
                    alert('Hệ thống cho phép đăng tải tối đa 1 video!');
                    return;
                }
            }
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
                        if (!mediaStatus) {
                            setMediaStatus('image');
                        }
                        const source = {
                            uri: myResponse.uri,
                            type: myResponse.type,
                            name: myResponse.fileName
                        };
                        console.log('srr', source)
                        setImages([...images, source]);
                    }
                });
            } else if (response.customButton === 'myVideoFromCamera') {
                if (mediaStatus === 'image') {
                    // eslint-disable-next-line no-alert
                    alert('Bạn chỉ được thêm một loại đa phương tiện. Bạn đã thêm ảnh!');
                    return;
                }
                ImagePicker.launchCamera({
                    storageOptions: {
                        path: 'VideoCamera',
                    },
                    mediaType: 'video',
                }, (myResponse) => {
                    if (myResponse.didCancel) {

                    } else if (myResponse.error) {

                    } else {
                        const source = {
                            uri: myResponse.uri,
                            type: myResponse.type,
                            name: myResponse.fileName
                        };
                        setMediaStatus('video');
                        setVideo(source);
                        console.log('Error at upload video type 1:', myResponse.errorMessage);
                    }
                });
            } else if (response.customButton === 'mylibrary') {
                ImagePicker.launchImageLibrary({
                    storageOptions: {
                        path: 'library',
                    },
                    mediaType: 'mixed',
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
                        const type = myResponse.type;
                        if (!mediaStatus) {
                            if (type === 'image/jpeg') {
                                setMediaStatus('image');
                                setImages([source]);
                            } else {
                                setMediaStatus('video');
                                setVideo(source);
                                console.log('Error at upload video type 2:', myResponse.errorMessage);
                            }
                        } else {
                            if (type === 'image/jpeg') {
                                console.log('srr', source)
                                setImages([...images, source]);
                            } else {
                                // eslint-disable-next-line no-alert
                                alert('Bạn chỉ được thêm một loại đa phương tiện. Bạn đã thêm ảnh!');
                            }
                        }
                    }
                });
            }
        });
    };

    const onPressButtomSheet = () => {
        sheetRef.current.snapTo(1);
        Keyboard.dismiss();
    }


    const onGoBackPage = () => {

        props.navigation.goBack();
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ backgroundColor: "#fff", flexDirection: "row", marginTop: 10, marginBottom: 10, marginRight: 10, marginLeft: 10, justifyContent: "space-between", alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => onGoBack()}
                >
                    <Icon5 name='arrow-left' size={20} color="#111" />
                </TouchableOpacity>
                <View style={{ width: "90%", backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>Tạo bài viết</Text>
                        {/* {props.post.isLoadingPost ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size="large" color="#ccc" />
                            </View> : <View></View>} */}
                    </View>
                    
                    <TouchableOpacity style={{ backgroundColor: "#1578EF", padding: 5, borderRadius: 5 }}
                        onPress={()=>onPost()}
                    >
                        <Text style={{ fontWeight: "600", fontSize: 15, color: "#fff" }}>ĐĂNG</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ height: 1, backgroundColor: "#ccc" }} />
            <View style={styles.p1}>
                <Image
                    style={styles.picture}
                    source={{ uri: `https://fakebook-server.herokuapp.com${props.auth?.profile?.avatar}` }}
                />
                <View style={styles.name}>
                    <View style={{}}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: 'bold', }}>{props.auth?.profile?.name}</Text>
                            <View style={{ flexDirection: "row" }}>
                                {feeling.title ?
                                    <Text> - Đang</Text> : <></>}
                                <Emoji name={feeling.icon ? feeling.icon : "kissing_heart"} style={{ fontSize: 20 }} />
                                {feeling.title ?
                                    <Text>{feeling.type === 1 ? "Cảm thấy" : ""}</Text> : <></>}
                            </View>
                        </View>
                        <Text style={{ fontWeight: "bold" }}>{feeling.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {/* <TouchableOpacity
                            style={{ height: 25, width: 80, borderRadius: 10, alignItems: "center", borderColor: `#a9a9a9` }}
                        >
                            <Text style={{ fontWeight: "bold", color: `#a9a9a9`, }}>Công khai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ height: 25, width: 80, borderRadius: 10, alignItems: "center", marginLeft: 10, }}
                        >
                            <Text style={{ fontWeight: "bold", color: `#a9a9a9` }}>+Album</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>

            <View style={styles.p2}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        placeholder="Bạn đang nghĩ gì?"
                        onFocus={onPressTextInput}
                        value={text}
                        onChangeText={(text) => setText(text)}
                    >
                    </TextInput>


                    <View>

                        {images.length !== 0 && gridImages}
                        {/* {mediaStatus === 'video' && (<VideoPlayer
                            video={video}
                            videoWidth={1600}
                            videoHeight={900}
                        />)} */}
                    </View>
                </ScrollView>
            </View>





            <TouchableOpacity
                style={styles.p3}
                onPress={onPressButtomSheet}>
                <Text style={{ fontSize: 15, marginLeft: 10 }}>Thêm vào bài viết của bạn</Text>
                <View style={{ flexDirection: 'row', marginLeft: 90 }}>
                    <Icon name="video-camera" style={styles.icon_create_room}></Icon>
                    <Icon name="image" style={styles.icon_create_room}></Icon>
                    <Icon name="smile-o" style={styles.icon_create_room}></Icon>
                    <Icon name="check-circle" style={styles.icon_create_room}></Icon>
                </View>
            </TouchableOpacity>

            <BottomSheet
                ref={sheetRef}
                snapPoints={[400, 300, 0]}
                initialSnap={1}
                enabledContentTapInteraction={false}
                renderContent={renderContent}
            />
            <BottomSheet
                ref={sheetDraft}
                snapPoints={[0, 300]}
                initialSnap={0}
                enabledContentTapInteraction={false}
                renderContent={Draft}
            />

        </View>
    )

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
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#fff",

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
        flexDirection: 'row',
        // backgroundColor: ,
    },
    p2: {
        flex: 6,
        backgroundColor: "#fff",
    },
    p3: {
        flex: 0.4,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    input: {
        fontSize: 25,
        // backgroundColor: "blue",
    },
    img: {
        //  backgroundColor: "red",
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
    },
    gridImagesViewLine: {
        flexDirection: 'row',
    },
    gridImagesViewView: {
        flexBasis: 1,
        flexGrow: 1,
        padding: 3,
    },
    gridImagesImage: {
        height: windowWidth / 2 - 6,
        resizeMode: 'cover',
        width: '100%',
    },
    gridImagesViewIcon: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        right: 10,
        top: 10,
    },

})

const mapStateToProps = state => {
    const { post, auth } = state;
    return { post, auth };
}
const mapActions = {
    post: PostAction.createPost,
    getAllPost: PostAction.getAllPost,
    getPostByUser: PostAction.getPostByUser,
}
let connectCreatePost = connect(mapStateToProps, mapActions)(CreatePost);

export { connectCreatePost as CreatePost };



