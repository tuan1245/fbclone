import { AuthService } from "./service";
import { AuthConstants } from "./constant";
import { storeData, getData, removeStore } from "../../../helper/requestHelper";

export const AuthActions = {
    login,
    register,
    getVerifyCode,
    checkVerifyCode,
    logout,
    getProfile,
}

function login(user) {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST });
        console.log('user', user);
        AuthService.login(user)
            .then(async (res) => {
                // console.log('login ok', res.data.content);
                await storeData('auth-token', res.data.content.payload.token);
                await storeData('userId', res.data.content.payload.id);
                console.log('token', await getData('auth-token'));
                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res.data.content.payload
                })
            })
            .catch(err => {
                console.log('lỗi đăng nhập');
                dispatch({ type: AuthConstants.LOGIN_FAILE, payload: err });
            })
    }
}
function register(user) {
    return dispatch => {
        dispatch({ type: AuthConstants.REGISTER_REQUEST });
        AuthService.register(user)
            .then(async res => {
                await storeData('userId', res.data.content.newUser._id);
                dispatch({
                    type: AuthConstants.REGISTER_SUCCESS,
                    payload: res.data.content.newUser
                })
            })
            .catch(err => {
                console.log('lỗi đăng KÝ    ');
                dispatch({ type: AuthConstants.REGISTER_FAILE, payload: err });
            })
    }
}

function getVerifyCode(phone) {
    return dispatch => {
        dispatch({ type: AuthConstants.GET_VERIFY_CODE_REQUEST });
        AuthService.getVerifyCode(phone)
            .then(async res => {
                console.log('ok', res.data.content);
                await storeData('userId', res.data.content.code);
                dispatch({
                    type: AuthConstants.GET_VERIFY_CODE_SUCCESS,
                    payload: res.data.content.code
                })
            })
            .catch(err => {
                console.log('looix rooif');
                dispatch({ type: AuthConstants.GET_VERIFY_CODE_FAILE, payload: err });
            })
    }
}
function checkVerifyCode(data) {
    return dispatch => {
        dispatch({ type: AuthConstants.CHECK_VERIFY_CODE_REQUEST });
        AuthService.checkVerifyCode(data)
            .then(async res => {
                console.log('verifyyyyyyyyyy', res.data.content);
                // storeData('userId', res.data.content.code);
                await storeData('auth-token', res.data.content.token)
                dispatch({
                    type: AuthConstants.CHECK_VERIFY_CODE_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                console.log('looix rooif');
                dispatch({ type: AuthConstants.CHECK_VERIFY_CODE_FAILE, payload: err });
            })
    }
}

function logout(){
    return dispatch => {
        dispatch({type: AuthConstants.LOGOUT_REQUEST});
        AuthService.logout()
            .then( async res => {
                console.log('reset logout ok');
                await removeStore('auth-token');
                await removeStore('userId');
                // Do sẽ reset localStorage và redux, không cần gọi dispatch({type: AuthConstants.LOGOUT_SUCCESS});
                // dispatch({type: 'RESET'})
                dispatch({type: AuthConstants.LOGOUT_SUCCESS});
            })
            .catch(err => {
                dispatch({type: AuthConstants.LOGOUT_FAILE});
            })
    }
}

function getProfile(){
    return dispatch => {
        dispatch({type: AuthConstants.GET_PROFILE_REQUEST});
        AuthService.getProfile()
            .then( res => {
                dispatch({
                    type: AuthConstants.GET_PROFILE_SUCCESS,
                    payload: res.data.content
                });
            })
            .catch(err => {
                dispatch({type: AuthConstants.GET_PROFILE_FAILE, err: err});
            })
    }
}