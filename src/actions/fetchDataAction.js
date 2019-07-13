import {graphDataConstants} from "./constants";
import {GetGraphData} from "../services/getGraphDataServices";

function request(type) {
    return {type:graphDataConstants.GET_DATA_REQUEST,filter:type}
}

function success(type) {
    return {type:graphDataConstants.GET_DATA_SUCCESS,
        filter:type}
}

function failure(type, err) {
    return {type:graphDataConstants.GET_DATA_fAILURE,
        err:err}
}

export function getGraphData(type,callback) {
    return dispatch=>{
        dispatch(request(type))
        GetGraphData(type,(values)=>{
            if(typeof callback ==='function'){
                callback(values)
            }
            dispatch(success(type,values))
        },(err)=>{
            dispatch(failure(type,err))
        })
    }
}
