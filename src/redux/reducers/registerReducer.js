import {userConstants} from "../../actions/constants";

const initialState = {isValidating: false,isReceived:false,response:[]}

export function registration(state = initialState, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                isValidating:true,
                isReceived: false,
            }
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                isValidating:false,
                isReceived: true,
                response: action.response
            };
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                isValidating:false,
                isReceived:false,
            };
        default:
            return state
    }
}
