
import {
    PostConstant
} from "./constant";

export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    error: null,
    isLoading: false,
    listPost: [],
    myPost: [],
}

export function post(state = initState, action) {

    // console.log('action type:  ', action.type);
    switch (action.type) {

        case PostConstant.GET_LIST_POST_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.GET_LIST_POST_SUCCESS:
            return {
                ...state,
                listPost: action.payload,
                isLoading: false,
                error: null
            };

        case PostConstant.GET_LIST_POST_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case PostConstant.GET_POST_BY_USER_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.GET_POST_BY_USER_SUCCESS:
            return {
                ...state,
                myPost: action.payload,
                isLoading: false,
                error: null
            };

        case PostConstant.GET_POST_BY_USER_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case PostConstant.CHANGE_LIKE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.CHANGE_LIKE_SUCCESS:
            return {
                ...state,
                post: action.payload,
                listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.CHANGE_LIKE_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case PostConstant.CREATE_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoadingPost: true,
                error: null
            };

        case PostConstant.GET_COMMENT_POST_REQUEST:
        case PostConstant.ADD_COMMENT_POST_REQUEST:
        case PostConstant.REPORT_POST_REQUEST:
        case PostConstant.CHANGE_AVATAR_REQUEST:
        case PostConstant.GET_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.GET_COMMENT_POST_SUCCESS:
            return {
                ...state,
                comment: action.payload,
                isLoading: false,
                error: null
            };

        case PostConstant.GET_POST_SUCCESS:
            return {
                ...state,
                singlePost: action.payload,
                isLoading: false,
                error: null
            };

        case PostConstant.ADD_COMMENT_POST_SUCCESS:
            return {
                ...state,
                comment: action.payload,
                isLoading: false,
                error: null
            };

        case PostConstant.CREATE_POST_SUCCESS:
            // let newList = [...[action.payload], ...state.listPost];
            // let newMyPost = [...[action.payload], ...state.myPost];
            return {
                ...state,
                listPost: action.payload.listpost,
                myPost: action.payload.listmypost,
                // listPost: newList,
                // myPost: newMyPost,
                isLoading: false,
                isLoadingPost: false,
                error: null
            };
        case PostConstant.CHANGE_AVATAR_SUCCESS:
            return {
                ...state,
                post: action.payload,
                // listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.REPORT_POST_SUCCESS:
            return {
                ...state,
                report: action.payload,
                // listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.GET_COMMENT_POST_FAILE:
        case PostConstant.ADD_COMMENT_POST_FAILE:
        case PostConstant.REPORT_POST_FAILE:
        case PostConstant.CHANGE_AVATAR_FAILE:
        case PostConstant.GET_POST_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case PostConstant.CREATE_POST_FAILE:
            return {
                ...state,
                isLoading: false,
                isLoadingPost: false,
                error: action.payload
            };

        default:
            return {
                ...state
            };
    }
}