import {graphDataConstants} from "./constants";
import {GetGraphData} from "../services/getGraphDataServices";

function request(type) {
    return {type:graphDataConstants.GET_DATA_REQUEST,filter:type}
}

function success(type,values) {
    return {type:graphDataConstants.GET_DATA_SUCCESS,
        filter:type,data:values}
}

function failure(type, err) {
    return {type:graphDataConstants.GET_DATA_fAILURE,
        err:err}
}


export function getGraphData(type) {
    return dispatch=>{
        dispatch(request(type))
        GetGraphData(type,(values)=>{
            dispatch(success(type,values))

        },(err)=>{
            console.log("failure")
            dispatch(failure(type,err))
        })
    }
}
