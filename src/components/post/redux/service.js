import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader,
    getData
} from '../../../helper/requestHelper';

export const PostService = {
    likePost,
    getAllPost,
    getPostByUser,
    getCommentPost,
    addCommentPost,
    createPost,
    reportPost,
    changeAvatar,
    getPost
};

async function getPostByUser() {
    let id = await getData('userId')
    let url = `https://fakebook-server.herokuapp.com/post/get-list-post-person/${id}`
    return sendRequest({
        url: url,
        method: 'GET',
    })
}

async function getAllPost() {
    let url = `https://fakebook-server.herokuapp.com/post/get-list-post`
    return sendRequest({
        url: url,
        method: 'GET',
    })
}
async function getPost(id) {
    let url = `https://fakebook-server.herokuapp.com/post/get-post/${id}`
    return sendRequest({
        url: url,
        method: 'GET',
    })
}

async function likePost(data) {
    console.log('data req', data);
    let url;
    if (data.type === "like") {
        url = `https://fakebook-server.herokuapp.com/post/like-post/${data.id}`
    } else {
        url = `https://fakebook-server.herokuapp.com/post/unlike-post/${data.id}`
    }
    return sendRequest({
        url: url,
        method: 'POST',
    })
}

async function getCommentPost(id) {
    console.log('post id', id);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/post/get-comment/${id}`,
        method: 'GET',
    })
}

async function addCommentPost(id, data) {
    console.log('post id', data, id);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/post/set-comment/${id}`,
        method: 'POST',
        data: data
    })
}

async function createPost(data) {
    console.log('data req', data);

    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/post/add-post',
        method: 'POST',
        data: data,
    })
}

async function reportPost(id, data) {
    console.log('post report', data, id);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/post/report-post/${id}`,
        method: 'POST',
        data: data
    })
}


async function changeAvatar(data) {
    console.log('data req', data);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/profile/${data.id}/change-information`,
        method: 'POST',
        data: data,
    })
}


