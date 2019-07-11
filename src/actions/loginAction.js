import {userConstants} from "./constants";
import { userService } from "../services/userServices";

export const loginActions = {
    login,
    checkLogin,
    logout,
};

//todo  改成之间返回对象的action
function login(username,password,callback){
    function request() { return{type:userConstants.LOGIN_REQUEST} }
    function success() { return{type:userConstants.LOGIN_SUCCESS} }
    function failure(error) { return{type:userConstants.LOGIN_FAILURE,error} }

    return dispatch=>{
        dispatch(request());
        userService.login(username,password,()=>{
            if (typeof callback==='function') {
                callback();
            }
            dispatch(success())
        },(e)=>dispatch(failure(e)))
    };
}

function checkLogin(token){
    return dispatch=>{
        console.log("before service function",token)

        dispatch({type:userConstants.CHECK_LOGIN_REQUEST})
        console.log("before service function",token)
        userService.checkLogin(token,(token)=>{
            dispatch({type: userConstants.LOGIN_SUCCESS})
            console.log("in check login in the token", token)
            localStorage.setItem('token', token)
        },(e)=>{
            console.log("in check login in failure", e)
            dispatch({type: userConstants.CHECK_LOGIN_FAILURE, error: e.toString()})
        })
    }
}


function logout() {
    userService.logout()
    return { type: userConstants.LOGOUT }
}