import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert, StatusBar, ActivityIndicator } from 'react-native'
import { CommonStyle } from '../sign-up/commonStyle'
import { pageName } from '../../../navigator/constant.page'
import { connect } from 'react-redux'
import { AuthActions } from '../redux/action'

const imageDefault = {
    // uri: "https://64.media.tumblr.com/73c96b375ab835c132f831fc3cd9db03/tumblr_pvr2anf2pk1w89qpgo1_1280.jpg"
    src: require('./../../../public/img/assets/logo.png')
}
const imageResize = {
    uri: "http://nutrientsmdvn.com/image/catalog/nutrient/facebook.png"
    // uri: "./fb_reg.png"
}


const LoginNewAccount = (props) => {
    const [loading, setLoading] = useState(false);
    const [acc, setAcc] = useState("");
    const [password, setPassword] = useState("");
    const [resizeImage, setResizeImage] = useState(false);
    const [enteringText, setEnteringText] = useState(false);
    const [enteringPass, setEnteringPass] = useState(false);

    useEffect(() => {
        console.log('props.auth?.user?.id', props.auth);
        
        if (props.auth.user.id){
            console.log(props.getProfile());
        
            setLoading(false);
            props.navigation.replace("Home");
        }
        else if (props.auth.error === undefined){
            setLoading(false);
            alert("loi")
        }
    }, [props.auth])

    const onPressLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        let loginData = {
            phoneNumber: acc,
            password: password
        }
        props.login(loginData);
    }
    const onPressForgotPW = () => {
        Alert.alert('Forgot pw')
    }
    const onPressCreateAcc = () => {
        props.navigation.navigate(pageName.sign_up.BEGIN)
    }

    // console.log('auth\n\n', props.auth);
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <ImageBackground
                source={resizeImage ? imageResize : imageDefault}
                style={resizeImage ? styles.imageOnFocusInput : styles.image}
            >
            </ImageBackground>

            <View style={styles.row}>
                <View style={styles.inputSection}>

                    {/* Điền tài khoản */}
                    <TextInput
                        style={[styles.input, enteringText && CommonStyle.inputUnderLine]}
                        placeholder="Số điện thoại hoặc email"
                        onChangeText={acc => setAcc(acc)}
                        value={acc}
                        onFocus={() => {
                            setResizeImage(true);
                            setEnteringText(true)
                        }}
                        onBlur={() => {
                            setEnteringText(false)
                        }}

                    />

                    {/* Điền mật khẩu */}
                    <TextInput
                        style={[styles.input, enteringPass && CommonStyle.inputUnderLine]}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                        onFocus={() => {
                            setResizeImage(true);
                            setEnteringPass(true)
                        }}
                        onBlur={() => {
                            // setResizeImage(false);
                            setEnteringPass(false)
                        }}
                        onChangeText={password => setPassword(password)}
                        value={password}
                    />

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={(e) => onPressLogin(e)}
                    >
                        <Text style={[CommonStyle.mediumText, { color: "#8DB0EB" }]}>Đăng nhập</Text>
                    </TouchableOpacity>
                    {loading === true &&
                        <View style={{
                                margin: 10, height: 50, flexDirection: "column", justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <ActivityIndicator size="large" color="#ccc" />
                            <Text>Loading...</Text>
                        </View>
                    }

                </View>

                {!resizeImage ?
                    <View style={styles.optionsSection} >

                        {/* Quên mật khẩu */}
                        <TouchableOpacity
                            onPress={onPressForgotPW}
                        >
                            <Text style={styles.options} > Quên mật khẩu? </Text>
                        </TouchableOpacity>

                        {/* Hoặc */}
                        <Text style={{ fontSize: 13, fontWeight: "600", marginTop: "15%" }}>
                            HOẶC
                        </Text>

                        {/* Nút tạo new acc */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[CommonStyle.submitBtn, { backgroundColor: "#32A24C", marginTop: "15%", width: "80%" }]}
                            onPress={onPressCreateAcc}
                        >
                            <Text style={[CommonStyle.mediumText, { color: "#FFF" }]}>Tạo tài khoản Facebook mới</Text>
                        </TouchableOpacity>

                    </View> :

                    <View>
                        {/* Tạo new acc*/}
                        <TouchableOpacity
                            onPress={onPressCreateAcc}
                            style={{ marginBottom: "25%", }}
                        >
                            <Text style={[styles.options, { fontSize: 16 }]} > Tạo tài khoản Facebook mới </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    image: {
        flex: 4,
        resizeMode: "contain",
        // justifyContent: "center",
    },
    imageOnFocusInput: {
        flex: 3,
        resizeMode: "contain",
    },

    row: {
        flex: 9,
        width: '90%',
        marginLeft: '5%'
    },

    inputSection: {
        flex: 4,
        marginTop: 40,
    },

    inputSectionOnFocus: {
        flex: 2,
        marginTop: 20,
    },

    input: {
        height: 40,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
        fontSize: 16,
        marginBottom: 15
    },

    optionsSection: {
        flex: 7,
        alignItems: "center"

    },

    optionsSectionOnFocus: {
        flex: 4,
        marginTop: 15
    },

    options: {
        display: "flex",
        fontSize: 20,
        fontWeight: "700",
        color: "#1577F2",
        textAlign: "center",
        marginTop: 12,
    }

});

const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    login: AuthActions.login,
    getProfile: AuthActions.getProfile,
    getVerifyCode: AuthActions.getVerifyCode,
}
let connected = connect(mapStateToProps, mapActions)(LoginNewAccount);

export { connected as LoginNewAccount }
