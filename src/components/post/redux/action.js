import { PostService } from "./service";
import { PostConstant } from "./constant";
import { storeData, getData } from "../../../helper/requestHelper";

export const PostAction = {
    likePost,
    getCommentPost,
    addCommentPost,
    createPost,
    reportPost,
    getAllPost,
    getPostByUser,
    changeAvatar,
    getPost,
}

function getPostByUser(id) {
    return dispatch => {
        dispatch({ type: PostConstant.GET_POST_BY_USER_REQUEST });
        PostService.getPostByUser(id)
            .then(res => {
                // console.log('res.data.content', res.data.content);
                dispatch({
                    type: PostConstant.GET_POST_BY_USER_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.GET_POST_BY_USER_FAILE, payload: err });
            })
    }
}
function getPost(id) {
    return dispatch => {
        dispatch({ type: PostConstant.GET_POST_REQUEST });
        PostService.getPost(id)
            .then(res => {
                console.log('get post ', res.data.content);
                dispatch({
                    type: PostConstant.GET_POST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.GET_POST_FAILE, payload: err });
            })
    }
}

function getAllPost() {
    return dispatch => {
        dispatch({ type: PostConstant.GET_LIST_POST_REQUEST });
        PostService.getAllPost()
            .then(res => {
                dispatch({
                    type: PostConstant.GET_LIST_POST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.GET_LIST_POST_FAILE, payload: err });
            })
    }
}

function likePost(data) {
    return dispatch => {
        dispatch({ type: PostConstant.CHANGE_LIKE_REQUEST });
        PostService.likePost(data)
            .then(res => {
                dispatch({
                    type: PostConstant.CHANGE_LIKE_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.CHANGE_LIKE_FAILE, payload: err });
            })
    }
}

function getCommentPost(id) {
    return dispatch => {
        dispatch({ type: PostConstant.GET_COMMENT_POST_REQUEST });
        PostService.getCommentPost(id)
            .then(res => {
                console.log("action received ", res.data.content);
                dispatch({
                    type: PostConstant.GET_COMMENT_POST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.GET_COMMENT_POST_FAILE, payload: err });
            })
    }
}


function createPost(data) {
    return dispatch => {
        dispatch({ type: PostConstant.CREATE_POST_REQUEST });
        PostService.createPost(data)
            .then(res => {
                dispatch({
                    type: PostConstant.CREATE_POST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.CREATE_POST_FAILE, payload: err });
            })
    }
}


function addCommentPost(id, data) {
    return dispatch => {
        dispatch({ type: PostConstant.ADD_COMMENT_POST_REQUEST });
        PostService.addCommentPost(id, data)
            .then(res => {
                console.log("action comment ", res.data.content.comment);
                dispatch({
                    type: PostConstant.ADD_COMMENT_POST_SUCCESS,
                    payload: res.data.content.comment
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.ADD_COMMENT_POST_FAILE, payload: err });
            })
    }
}

function reportPost(id, data) {
    return dispatch => {
        dispatch({ type: PostConstant.REPORT_POST_REQUEST });
        PostService.reportPost(id, data)
            .then(res => {
                console.log("action report ", res.data.content);
                dispatch({
                    type: PostConstant.REPORT_POST_SUCCESS,
                    payload: res.data.content.reported
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.REPORT_POST_FAILE, payload: err });
            })
    }
}



function changeAvatar(data) {
    return dispatch => {
        dispatch({ type: PostConstant.CHANGE_AVATAR_REQUEST });
        PostService.createPost(data)
            .then(res => {
                dispatch({
                    type: PostConstant.CHANGE_AVATAR_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.CHANGE_AVATAR_FAILE, payload: err });
            })
    }
}
