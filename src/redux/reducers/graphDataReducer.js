import {graphDataConstants} from "../../actions/constants";

const initialState = {isFetching:false,isFetched:true,
                    filter:null,error:null}

export function transport(state = initialState,action){
    switch (action.type) {
        case graphDataConstants.GET_DATA_REQUEST:
            return {
                ...state,
                responseData:[],
                isFetching: true,
                isFetched: false,
            }
        case graphDataConstants.GET_DATA_SUCCESS:
            return {
                ...state,
                isFetching:false,
                isFetched:true,
            }
        case graphDataConstants.GET_DATA_fAILURE:
            return {
                ...state,
                isFetching:false,
                isFetched:false,
                error: action.err
            }
        default:
            return state

    }
}
