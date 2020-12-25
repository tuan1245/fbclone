import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import { CommonStyle } from './commonStyle'
import { pageName } from './../../../navigator/constant.page'

import { connect } from 'react-redux'
import { AuthActions } from '../redux/action'

const Policy = (props) => {
    const [loading, setLoading] = useState(false);

    const data = props.route.params.data;

    const onPressNext = ()=>{
        setLoading(true);
        setTimeout(()=>{
            props.register(data);
        }, 1000)
        
    }
    
    useEffect(() => {
        if (props.auth.user?._id) {
            setLoading(false);
            props.navigation.navigate(pageName.sign_up.CONFIRM, {data})
        } 
    },[props.auth.user])

    return (
        <View style={{flex:1,opacity:0.5, backgroundColor:"#fff"}}>
            
            <View style={CommonStyle.row_90}>
                <View style={{ flex: 1 }}></View>

                <View style={{ flex: 4}}>

                    <Text style={CommonStyle.mediumText}>Hoàn tất đăng ký</Text>
                    <Text style={CommonStyle.content}>
                        Bằng cách ấn vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và chọn không nhận bất cứ lúc nào.
                        Thông tin từ danh bạ của bạn sẽ được tải lên Faceboook liên tục để chúng tôi có thể gợi ý bạn bè, cung cấp và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn.
                    </Text>
                </View> 
                {
                loading && <ActivityIndicator size="large" color="#CCC"/>
            }
                <View style={{ flex: 4 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={CommonStyle.submitBtn}
                        onPress={onPressNext}
                    >
                        <Text style={[CommonStyle.textBtn, { color: "#FFF" }]}>Đăng ký</Text>
                    </TouchableOpacity>
                    <Text style={[CommonStyle.smallText, { color: "#1577F2", marginTop:10 }]}>Đăng ký mà không tải danh bạ của tôi lên</Text>

                </View>

                <View style={{ flex: 1.5}}>

                    <Text style={[CommonStyle.smallText, { color: "#555", fontSize:12 }]}>
                        Thông tin liên hện trong danh bạ của bạn, bao gồm tên, số điện thoại và biệt danh, sẽ được gửi tới Facebook để chúng tôi có thể gợi ý bạn bè, cung vấp và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn. Bạn có thể tắt tính năng này trong phần Cài đạt, quản lý hoặc xóa bỏ thông tin liên hẹ mình đã chia sẻ với Facebook. Tìm hiểu thêm
                        
                    </Text>

                </View>

            </View >

        </View>
    )
}

const styles = StyleSheet.create({

})
const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    register: AuthActions.register,
}
let connected = connect(mapStateToProps, mapActions)(Policy);

export { connected as Policy }
