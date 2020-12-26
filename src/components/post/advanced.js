import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { pageName } from '../../navigator/constant.page';

const Advanced = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#fff" }}>
            <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate(pageName.main.MAIN)}>
                    <Feather
                        name='x'
                        size={25}
                        color='#222121'
                        style={{ marginLeft: "90%", padding: 8 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
                <AntDesign name='tago' size={18} color='#222121' style={{ marginTop: 5 }} />
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>Lưu bài viết</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", borderBottomColor: "#ccc", borderBottomWidth: 1, padding: 10 }}>
                <AntDesign name='minussquareo' size={18} color='#222121' style={{ marginTop: 5 }} />
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>Ẩn bài viết</Text>
                </TouchableOpacity>
            </View>

            <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
                <Octicons name='report' size={18} color='#222121' style={{ marginTop: 5, width: 18 }} />
                <TouchableOpacity style={{ marginLeft: 10 }}
                    onPress={() => { navigation.navigate(pageName.report.REPORT_POST) }}>
                    <Text style={{ fontSize: 18 }}>Báo cáo bài viết</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export { Advanced }



