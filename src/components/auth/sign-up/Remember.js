import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Modal from 'react-native-modal';
import { pageName } from '../../../navigator/constant.page'
import { connect } from 'react-redux'
import { AuthActions } from '../redux/action'

const Remember = (props) => {
    const [isVisible, setIsVisible] = useState(true);


    const onPressBtnNext = () => {
        const data = props.route.params.data;
        setIsVisible(false);
        props.navigation.navigate(pageName.main.MAIN)
    }


    return (
        <Modal
            isVisible={isVisible}
            style={styles.model}
            backdropOpacity={0.8}

        >
            <View style={CommonStyle.background}>
                <View style={CommonStyle.row_90}>
                    <View style={{ flex: 1 }}>

                    </View>

                    <View style={{ flex: 8 }}>
                        <Text style={[CommonStyle.mediumText]}>Lưu thông tin đăng nhập của bạn</Text>

                        <Text style={[CommonStyle.content]}>Lần tới khi đăng nhập vào điện thoại này, bạn chỉ cần nhấn vào ảnh đại diện thay vì nhập mật khẩu.</Text>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[CommonStyle.submitBtn, styles.button, { backgroundColor: "#A0A0A0" }]}
                            onPress={onPressBtnNext}
                        >
                            <Text style={[CommonStyle.textBtn]}>Lúc khác</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[CommonStyle.submitBtn, styles.button]}
                            onPress={onPressBtnNext}
                        >
                            <Text style={[CommonStyle.textBtn]}>OK</Text>
                        </TouchableOpacity>
                    </View>

                </View >
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        width: "40%"
    }
})
const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    register: AuthActions.register,
}
let connected = connect(mapStateToProps, mapActions)(Remember);

export { connected as Remember }
