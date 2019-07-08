import {IAFConstants} from "../../actions/constants";


const initialState = {
    matching : false,
    isMatched:false,
}

export function IAFReducer(state = initialState,action){
    switch (action.type) {
        case IAFConstants.MATCH_REQUEST:
            return {
                ...state,
                matching:true,
            }
        case IAFConstants.MATCH_SUCCESS:
            return {
                ...state,
                matching:false,
                isMatched: false
            }
        case IAFConstants.MATCH_FAILURE:
            return {
                ...state,
                matching:false,
                isMatched:false,
                error:action.error,
                //todo  上面的状态需要重置吗！？
            }
        default:
            return state
    }
}
