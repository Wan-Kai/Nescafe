import {graphDataConstants} from "../../actions/constants";

const initialState = {isGetting:false,isDone:true,
                    filter:null,responseData:[],error:null}

export function transport(state = initialState,action){
    switch (action.type) {
        case graphDataConstants.GET_DATA_REQUEST:
            return {
                ...state,
                isGetting: true,
                isDone: false,
            }
        case graphDataConstants.GET_DATA_SUCCESS:
            return {
                ...state,
                isGetting:false,
                isDone:true,
                responseData: action.data
            }
        case graphDataConstants.GET_DATA_fAILURE:
            return {
                ...state,
                isGetting:false,
                isDone:false,
                error: action.err
            }
        default:
            return state

    }
}
