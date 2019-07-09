import {userConstants} from "../../actions/constants";

const initialState = {isReceiving: false,isReceived:false,failure:false}

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                ...state,
                isReceiving:true,
                failure: false,
            }
        case userConstants.REGISTER_SUCCESS:
            return {
                ...state,
                isReceived: true,
            };
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                failure:true,
            };
        default:
            return state
    }
}
