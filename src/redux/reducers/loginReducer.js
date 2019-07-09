import {userConstants} from "../../actions/constants";

const initialState = {loggedIn:false,loggingIn:false}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.CHECK_LOGIN_REQUEST:
            return state;
        case userConstants.LOGIN_REQUEST:
            return{
                loggingIn:true,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn:false,
                loggedIn:true,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggingIn:false,
                loggedIn:false,
                error:action.error
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
