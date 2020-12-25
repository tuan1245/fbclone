import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { CommonStyle } from './commonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { pageName } from './../../../navigator/constant.page';

const Name = ({ navigation }) => {

    const [filled, setFilled] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [enteringLastName, setEnteringLastName] = useState(false);
    const [enteringFirstName, setEnteringFirstName] = useState(false);

    const onPressBtnNext = () => {
        const data = {
            name: firstName + " " + lastName
        }
        if (firstName.length && lastName.length) {
            setFilled(true)
            navigation.navigate(pageName.sign_up.BIRTH, { data: data });
        }
        else {
            setFilled(false)
        }
    }



    return (
        <View style={CommonStyle.background}>
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 2.5 }}>

                    <Text style={CommonStyle.mediumText}>Bạn tên gì?</Text>
                    {!filled &&
                        <View style={styles.noti} >
                            <Text style={[CommonStyle.smallText, { color: "red", marginTop: 10 }]}>Vui lòng nhập họ và tên của bạn</Text>
                            <Icon name="exclamation-circle" style={styles.warning}></Icon>
                        </View>
                    }
                    <View style={styles.nameInput}>
                        <TextInput
                            style={[styles.firstNameInput, enteringFirstName && CommonStyle.inputUnderLine]}
                            placeholder="Họ"
                            autoFocus={true}
                            onChangeText={text => setFirstName(text)}
                            value={firstName}
                            onFocus={() => {
                                setEnteringFirstName(true)
                            }}
                            onBlur={() => {
                                setEnteringFirstName(false)
                            }}
                        >
                        </TextInput>

                        <TextInput
                            style={[styles.firstNameInput, enteringLastName && CommonStyle.inputUnderLine, { marginLeft: "5%" }]}
                            placeholder="Tên"
                            onChangeText={text => setLastName(text)}
                            value={lastName}
                            onFocus={() => {
                                setEnteringLastName(true);
                            }}
                            onBlur={() => {
                                setEnteringLastName(false)
                            }}
                        >
                        </TextInput>
                    </View>
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
        </View >
    )
}

const styles = StyleSheet.create({
    nameInput: {
        flexDirection: 'row',
        marginTop: 20,
    },
    firstNameInput: {
        width: "47.5%",
        borderBottomColor: "#CCC",
        borderBottomWidth: 1,
        height: 40,
        fontSize: 20,
    },

    noti: {
        flexDirection: "row",
        justifyContent: "center"
    },

    warning: {
        color: "red",
        fontSize: 20,
        textAlignVertical: "bottom",
        marginLeft: 10
    }
})

export { Name }
