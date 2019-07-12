import {submitDataConstants} from "../../actions/constants";

const initialState = {
    isSubmitting:false,
    isSubmitted:false,
    isFailure:false,
}

export function submitFormData(state=initialState,action){
    switch (action.type) {
        case submitDataConstants.SUBMIT_DATA_REQUEST:
            return {
                ...state,
                isSubmitting: true,
                isFailure: false,
                isSubmitted:false,
            }
        case submitDataConstants.SUBMIT_DATA_SUCCESS:
            return {
                ...state,
                isSubmitting:false,
                isSubmitted: true,
            }
        case submitDataConstants.SUBMIT_DATA_FAILURE:
            return{
                ...state,
                isSubmitting:false,
                isFailure:true,
                error:action.err,
            }
        default:
            return state
    }
}
