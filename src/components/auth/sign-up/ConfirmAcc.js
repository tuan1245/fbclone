import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { pageName } from './../../../navigator/constant.page'

import { connect } from 'react-redux'
import { AuthActions } from '../redux/action'

const ConfirmAcc = (props) => {

    const [code, setConfirmCode] = useState("");
    const [validConfirmCode, setValidConfirmCode] = useState(true)
    const data = props.route.params.data;
    const onPressBtnNext = () => {
        let phoneNumber = data.phoneNumber;
        props.checkVerifyCode({ phoneNumber, code });

    }
    useEffect(() => {
        if (props.auth?.verifycode?.success) {
            setValidConfirmCode(true);
            props.navigation.navigate(pageName.sign_up.REMIND, { data })
        } else {
            setValidConfirmCode(false);
        }
    }, [props.auth.verifycode])

    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}>

                </View>

                <View style={{ flex: 3 }}>

                    <Text style={[CommonStyle.content]}>Mã xác thực của bạn là: {props.auth.user.code}</Text>
                    {/* {!validConfirmCode &&
                        <View style={{
                            flexDirection: "row",
                            width: "90%",
                            marginLeft: "5%"
                        }}>
                            <Text style={[CommonStyle.smallText, { color: "red" }]}>Mã xác thực không đúng, hãy nhập lại</Text>
                            <Icon name="exclamation-circle" style={{
                                color: "red",
                                fontSize: 20,
                                textAlignVertical: "bottom",
                            }}></Icon>
                        </View>
                    } */}
                    <View style={[styles.input]}>
                        <TextInput
                            value={code}
                            onChangeText={code => setConfirmCode(code)}
                            style={styles.phoneNumberInput}
                            autoFocus={true}
                        >
                        </TextInput>
                    </View>

                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn, { marginBottom: 10 }]}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Xác nhận</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        activeOpacity={0.5}
                        style={[CommonStyle.submitBtn, { backgroundColor: "#999" }]}
                        onPress={onPressForgot}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tôi không nhận được mã</Text>
                    </TouchableOpacity> */}
                </View>

            </View >



            <View style={CommonStyle.footer}>
                <Text style={[CommonStyle.smallText, { color: "#1577F2", fontWeight: "700" }]}>Đăng xuất</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        marginTop: 10,
    },
    phoneNumberInput: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        fontSize: 16,
    },
    otherBtn: {
        borderRadius: 5,
        borderColor: "#CCC",
        borderWidth: 1,
        height: 40,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        marginTop: 20
    },
    warning: {
        color: "red",
        fontSize: 20,
        textAlign: "right"
    }
})
const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    checkVerifyCode: AuthActions.checkVerifyCode,
}
let connected = connect(mapStateToProps, mapActions)(ConfirmAcc);

export { connected as ConfirmAcc }
