import {IAFConstants} from "./constants";
import {IAFServices} from "../services/investAndFinanceServices";


export const IAFAction = {
    investMatch,
    financeMatch
}


function investMatch(money,dateRange,credit){
    return dispatch=>{
        dispatch({type:IAFConstants.MATCH_REQUEST})
        IAFServices.investService(money,dateRange,credit
        ,()=>dispatch({type: IAFConstants.MATCH_SUCCESS})
        ,(e)=>dispatch({type:IAFConstants.MATCH_FAILURE,error:e})
        )
    }
}


function financeMatch(money,dateRange,mode) {
    return dispatch=>{
        dispatch({type:IAFConstants.MATCH_REQUEST})
        IAFServices.financeService(money,dateRange,mode
            ,()=>{dispatch({type:IAFConstants.MATCH_SUCCESS})}
            ,(e)=>{dispatch({type:IAFConstants.MATCH_FAILURE,error: e})}
            )
    }

}
