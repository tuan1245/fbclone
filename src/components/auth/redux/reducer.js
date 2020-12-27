
import {
    AuthConstants
} from "./constant";

export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    user: {},
    profile: {},
    error: null,
    forgotPassword: false,
    reset_password: false,
    isLoading: false
}

export function auth(state = initState, action) {

    console.log('action type:  ', action.type);
    switch (action.type) {

        case AuthConstants.LOGIN_REQUEST:
        case AuthConstants.LOGOUT_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null,
                isLogout: false
            };

        case AuthConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

            
        // case AuthConstants.GET_PROFILE_REQUEST:

        //     return {
        //         ...state,
        //     };

        case AuthConstants.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                // isLoading: false,
                // error: null
            };

        case AuthConstants.LOGIN_FAILE:
        case AuthConstants.LOGOUT_FAILE:
        case AuthConstants.GET_PROFILE_FAILE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                    company: null
                },
                profile: {},
                error: action.err
            };
        case AuthConstants.LOGOUT_SUCCESS:
                // await removeStore('auth-token');
                // await removeStore('userId');
                return {
                    ...state,
                    isLoading: false,
                    user: {
                        _id: null,
                        name: null,
                        email: null,
                        roles: null,
                        company: null
                    },
                    error: null,
                    isLogout: true
                };
        case AuthConstants.REGISTER_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.REGISTER_FAILE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                    company: null
                },
                error: action.payload
            };

        case AuthConstants.GET_VERIFY_CODE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.GET_VERIFY_CODE_SUCCESS:
            return {
                ...state,
                verifycode: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.GET_VERIFY_CODE_FAILE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                },
                error: action.payload
            };
        case AuthConstants.CHECK_VERIFY_CODE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.CHECK_VERIFY_CODE_SUCCESS:
            return {
                ...state,
                verifycode: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.CHECK_VERIFY_CODE_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };


        default:
            return {
                ...state
            };
    }
}