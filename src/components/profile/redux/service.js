import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const ProfileService = {
    changeAvatar,
};

async function changeAvatar(data,id) {
    console.log('data req', data);
    let url;

    console.log('hungaa,https://fakebook-server.herokuapp.com/profile/',id,'change-information')
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/profile/change-avatar`,
        method: 'PATCH',
        data: data,
    })
}