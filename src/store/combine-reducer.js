import { combineReducers } from 'redux';
import { auth } from '../components/auth/redux/reducer';


import { post } from '../components/post/redux/reducer';
// import { notification } from '../components/notification-tab/redux/reducer';
// import { profile } from '../components/profile/redux/reducer';
// import { getData, removeStore } from '../helper/requestHelper'

const appReducer = combineReducers({
    auth,
    post,
    // profile,
    // notification
})
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
        // await removeStore('auth-token');
        // await removeStore('userId');
        // console.log('userId', await getData("userId"));
    }

    return appReducer(state, action);
}

export default rootReducer;