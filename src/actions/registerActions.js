import {userConstants} from "./constants";
import {userService} from "../services/userServices";

export function receiveInfo(type, id, callback){
    return dispatch=>{
        dispatch(userConstants.REGISTER_REQUEST);
        userService.register(type,id,()=>{
            if(typeof callback ==="function"){
                callback()
            }
            dispatch({type:userConstants.REGISTER_REQUEST})
        },()=>{
            dispatch({type:userConstants.REGISTER_FAILURE})
            //todo  add more things
        })
    }
}
