import {userConstants} from "../../actions/constants";

const initialState = {loggedIn:false,loggingIn:false,initLogin:false}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return{
                ...state,
                loggingIn:true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn:false,
                loggedIn:true,
                initLogin:true,//反正只要登陆了  就肯定不要再init了
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn:false,
                loggedIn:false,
                error:action.error
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                loggingIn:false,
                loggedIn:false,
            };
        case userConstants.CHECK_LOGIN_REQUEST:
            return {
                ...state,
                loggingIn:true,
            };
        case userConstants.CHECK_LOGIN_FAILURE:
            return{
                ...state,
                initLogin:true,
                loggingIn:false,
        }

        default:
            return state
    }
}
