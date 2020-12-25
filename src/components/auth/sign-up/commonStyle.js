import { StyleSheet } from "react-native";

export const CommonStyle = StyleSheet.create({
    background: {
        backgroundColor: "#FFF",
        flex: 1
    },

    row_90: {
        flex: 1,
        width: '90%',
        marginLeft: '5%'
    },

    // Font chữ 15 màu đen xám để thể hiện content
    content: {
        margin: 10,
        fontSize: 15,
        textAlign: "center",
        color: "#4A4A4A"
    },

    // Nút xác nhận mặc định màu blue, width 100%
    submitBtn: {
        backgroundColor: "#1577F2",
        height: 45,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",

    },

    // Font chữ 20 mặc định là màu đen
    mediumText: {
        display: "flex",
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        color: "#222"
    },

    // Font chữ 14 mặc định là màu blue
    smallText: {
        display: "flex",
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        color: "#1577F2"
    },

    textBtn: {
        display: "flex",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color: "#FFF"
    },

    // border bottom cho input khi focus 
    inputUnderLine: {
        borderBottomColor: '#1577F2',
        borderBottomWidth: 2,
    },

    // Footer phần tạo tài khoản
    footer: {
        padding: 10,
        display: "flex",
        alignSelf: "center"
    }

})