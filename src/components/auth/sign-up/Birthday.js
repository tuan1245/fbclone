import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { CommonStyle } from './commonStyle'
import { pageName } from '../../../navigator/constant.page';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'

const Birthday = ({ navigation, route }) => {

    const [date, setDate] = useState(new Date());
    const [isEnoughAge, setIsEnoughAge] = useState(true);


    const onPressBtnNext = () => {
        let nextPage = checkAge();

        if (nextPage) {
            setIsEnoughAge(true);
            const data = route.params.data;
            data.birth = date;
            navigation.navigate(pageName.sign_up.PHONE, { data });
        }
        else {
            setIsEnoughAge(false);
        }

    }

    // Xử lý tuổi
    const checkAge = () => {
        console.log(route);
        let today = new Date();
        let mod = Math.ceil((today.getFullYear() - date.getFullYear()) / 4); // so nam nhuan toi da
        let age = Math.floor((today - date - 86400000 * mod) / 31536000000);

        return age >= 5;
    }

    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 3, display: "flex", alignItems: "center" }}>

                    <Text style={CommonStyle.mediumText}>Sinh nhật của bạn khi nào?</Text>

                    {!isEnoughAge &&
                        <View style={styles.noti}>
                            <Text style={[CommonStyle.smallText, { color: "red", marginTop: 10 }]}>Có vẻ như bạn đã nhập thông tin sai. Hãy đảm bảo sử dụng ngày sinh thật của mình.</Text>
                            <Icon name="exclamation-circle" style={[styles.warning]}></Icon>
                        </View>

                    }
                    <DatePicker
                        date={date}
                        mode="date"
                        androidVariant="nativeAndroid"
                        locale='vi'
                        onDateChange={
                            setDate
                        }
                    />

                </View>
                <View style={{ flex: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={onPressBtnNext}
                    >
                        <Text style={[CommonStyle.textBtn]}>Tiếp</Text>
                    </TouchableOpacity>
                </View>

            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        marginTop: 10,
    },
    birthdayInput: {
        width: "100%",
        borderRadius: 5,
        borderColor: "#999",
        borderWidth: 1,
        height: 40,
        fontSize: 15,
    },
    noti: {
        flexDirection: "row",
        marginLeft: 40
    },

    warning: {
        color: "red",
        fontSize: 20,
        textAlignVertical: "bottom",
        marginRight: 40
    },

    birthday: {
        flexDirection: "row",
        justifyContent: "center",

    },
    birthdayCol: {
        marginLeft: 5,
        marginRight: 5,

    }
})

export { Birthday }
