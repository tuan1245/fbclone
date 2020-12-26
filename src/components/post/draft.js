import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';

const Draft = () => {


    return (
        <>
            <View>
                <Text>Bạn muốn hoàn thành bài viết của mình sau?</Text>
                <Text>Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: "row" }}>
                <Icon3 name="tagso" />
                <View style={{ flexDirection: "column" }}>
                    <Text>Lưu làm bản nháp</Text>
                    <Text>Bạn sẽ nhận được thông báo về bản nháp</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row" }}>
                <Icon3 name="tagso" />
                <Text>Bạn sẽ nhận được thông báo về bản nháp</Text>
            </TouchableOpacity>
        </>
    )
}

export { Draft };