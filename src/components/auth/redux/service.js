// import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader,
    getData
} from '../../../helper/requestHelper';

export const AuthService = {
    login,
    register,
    getVerifyCode,
    logout,
    checkVerifyCode,
    getProfile,
};

async function getProfile() {
    let id = await getData("userId");
    console.log('id', id);
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/get-profile/${id}`,
        method: 'GET',
    })
}

async function logout() {
    let token = await getData("auth-token");
    console.log('token', token);
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/logout',
        method: 'POST',
        data: { token },
    })
}

async function login(data) {
    console.log('data req', data);
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/login',
        method: 'POST',
        data: data,
    })
}

async function register(data) {
    console.log('data req', data);
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/register',
        method: 'POST',
        data: data,
    })
}

async function getVerifyCode(phone) {
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/get-verifycode/${phone}`,
        method: 'GET',
        // headers: await AuthenticateHeader(),
    })
}

async function checkVerifyCode(data) {
    console.log("checkedddddddd", data);
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/verifycode`,
        method: 'POST',
        data: data
        // headers: await AuthenticateHeader(),
    })
}