import { HeaderBackButton } from '@react-navigation/stack';
import { Thumbnail } from 'native-base';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-player';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import AddToPost from '../../components/createPost/bottomSheet/AddToPost';
import SaveDraft from '../../components/createPost/bottomSheet/SaveDraft';
import { WINDOW_WIDTH } from '../../helper/dimension';
import * as colors from './../../constants/colors';
import { toArray } from "react-emoji-render";

function CreatePostScreen({ navigation }) {
    const { control, handleSubmit } = useForm();
    const sheetAddToPostRef = useRef(null);
    const sheetSaveDraftRef = useRef(null);
    const inputRef = useRef(null);

    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);
    const [mediaStatus, setMediaStatus] = useState(null);

    const avatarMain = useSelector(state => state.auth.avatarMain);
    const usernameMain = useSelector(state => state.auth.usernameMain);
    const dispatch = useDispatch();

    let gridImages = null;
    if (mediaStatus === 'image') {
        gridImages = (
            <View>
                <View style={styles.gridImagesViewLine}>
                    <View style={styles.gridImagesViewView}>
                        <Image
                            source={images[0]}
                            style={styles.gridImagesImage}
                        />
                        <View style={styles.gridImagesViewIcon}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (images.length === 1) {
                                        setMediaStatus(null);
                                        setImages([]);
                                    } else {
                                        const newImages = [...images];
                                        newImages.splice(0, 1);
                                        setImages(newImages);
                                    }
                                }}
                            >
                                <Ionicons name="close" color={colors.grey500} size={24} />
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
                                        <Ionicons name="close" color={colors.grey500} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('./../../../assets/images/defaultAvatar.jpg')}
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
                                        <Ionicons name="close" color={colors.grey500} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('./../../../assets/images/defaultAvatar.jpg')}
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
                                        <Ionicons name="close" color={colors.grey500} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                                <Image
                                    source={require('./../../../assets/images/defaultAvatar.jpg')}
                                    style={styles.gridImagesImage}
                                />
                            )}
                    </View>
                </View>
            </View>
        );
    }

    const handleAddMedia = () => {
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
                    alert('Bạn đã thêm tối đa 4 ảnh rồi!');
                    return;
                }
                if (mediaStatus === 'video') {
                    // eslint-disable-next-line no-alert
                    alert('Bạn đã thêm tối đa 1 video rồi!');
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
                        const source = { uri: myResponse.uri };
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
                        const source = { uri: myResponse.uri };
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
                        const source = { uri: myResponse.uri };
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

    const onPost = () => {
        const parseEmojis = value => {
            const emojisArray = toArray(value);

            // toArray outputs React elements for emojis and strings for other
            const newValue = emojisArray.reduce((previous, current) => {
                if (typeof current === "string") {
                    return previous + current;
                }
                return previous + current.props.children;
            }, "");

            return newValue;
        };
        console.log(parseEmojis(":)hello"));
        navigation.navigate('FeelTabNavigator');
    };

    const parseEmojis = value => {
        const emojisArray = toArray(value);

        // toArray outputs React elements for emojis and strings for other
        const newValue = emojisArray.reduce((previous, current) => {
            if (typeof current === "string") {
                return previous + current;
            }
            return previous + current.props.children;
        }, "");

        return newValue;
    };

    const onGoBack = data => {
        if (!data.post && images.length === 0 && !video) {
            navigation.goBack();
        } else {
            inputRef.current.blur();
            sheetAddToPostRef.current.snapTo(2);
            sheetSaveDraftRef.current.snapTo(0);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={handleSubmit(onGoBack)}
                />
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={handleSubmit(onPost)}
                >
                    <View style={styles.stackButton}>
                        <Text style={styles.stackText}>
                            ĐĂNG
            </Text>
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const renderAddToPost = () => (
        <AddToPost
            handleAddMedia={handleAddMedia}
        />
    );

    const renderSaveDraft = () => (
        <SaveDraft />
    );

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.top}>
                    <View style={styles.topView}>
                        <View style={styles.authorLeft}>
                            <Thumbnail
                                source={{ uri: avatarMain }}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.authorRight}>
                            <Text>{parseEmojis(":)hello")}</Text>
                        </View>
                    </View>
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <TextInput
                                ref={inputRef}
                                multiline={true}
                                placeholder="Bạn đang nghĩ gì?"
                                selectionColor={colors.blue800}
                                onFocus={() => {
                                    sheetAddToPostRef.current.snapTo(2);
                                }}
                                style={styles.input}
                                onBlur={onBlur}
                            // onChangeText={v => onChange(v)}
                            // value={value}
                            />
                        )}
                        name="post"
                        defaultValue=""
                    />
                    {mediaStatus === 'image' && gridImages}
                    {mediaStatus === 'video' && (<VideoPlayer
                        video={video}
                        videoWidth={1600}
                        videoHeight={900}
                    />)}
                </ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        inputRef.current.blur();
                        sheetAddToPostRef.current.snapTo(1);
                    }}
                >
                    <View style={styles.bottom}>
                        <Text style={styles.bottomText}>
                            Thêm vào bài viết của bạn
            </Text>
                        <View style={styles.bottomIcons}>
                            <Ionicons name="videocam" color={colors.deepPurple400} size={24} />
                            <Ionicons name="images" color={colors.green500} size={24} style={styles.bottomIcon} />
                            <Ionicons name="person" color={colors.blueA400} size={24} style={styles.bottomIcon} />
                            <Ionicons name="happy-outline" color={colors.yellow700} size={24} style={styles.bottomIcon} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomSheet
                ref={sheetAddToPostRef}
                snapPoints={[375, 190, 0]}
                initialSnap={2}
                enabledContentTapInteraction={false}
                renderContent={renderAddToPost}
            />
            <BottomSheet
                ref={sheetSaveDraftRef}
                snapPoints={[200, 0]}
                initialSnap={1}
                enabledContentTapInteraction={false}
                renderContent={renderSaveDraft}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'flex-end',
    },
    top: {
        flex: 1,
    },
    topView: {
        flexDirection: 'row',
        padding: 10,
    },
    authorLeft: {
        flexBasis: 1,
        flexGrow: 1,
    },
    authorRight: {
        flexBasis: 8,
        flexGrow: 8,
    },
    avatar: {
        height: 40,
        width: 40,
    },
    username: {
        color: colors.grey900,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    input: {
        color: colors.grey900,
        fontSize: 24,
    },
    bottom: {
        alignItems: 'center',
        borderTopColor: colors.blueGrey100,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    bottomText: {
        color: colors.grey900,
        fontSize: 16,
    },
    bottomIcons: {
        flexDirection: 'row',
    },
    bottomIcon: {
        marginLeft: 2,
    },
    stackButton: {
        marginRight: 10,
    },
    stackText: {
        color: colors.grey700,
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
        height: WINDOW_WIDTH / 2 - 6,
        resizeMode: 'cover',
        width: '100%',
    },
    gridImagesViewIcon: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        right: 10,
        top: 10,
    },
});

export default CreatePostScreen;