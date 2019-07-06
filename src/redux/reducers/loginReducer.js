import {userConstants} from "../../actions/constants";

let user
//todo  get default user
if(localStorage.getItem('user')===undefined){
    user = JSON.parse(localStorage.getItem('user'));
}
const initialState = user?{loggedIn:true,loggingIn:true,user}:{loggedIn:false,loggingIn:false}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return{
                loggingIn:true,
                user:action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn:false,
                loggedIn:true,
                user:action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggingIn:false,
                loggedIn:false,
            };
        case userConstants.LOGOUT:
            return {
                loggingIn:false,
                loggedIn:false,
            };
        default:
            return state
    }
}
