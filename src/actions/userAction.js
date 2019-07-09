import {userConstants} from "./constants";
import { userService } from "../services/userServices";
import { alertActions } from "./alertAction";

export const userActions = {
    login,
    checkLogin,
    logout,
    register,
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
        dispatch({type:userConstants.CHECK_LOGIN_REQUEST})
        console.log("before service function")
        userService.checkLogin(token,(token)=>{
            dispatch({type: userConstants.LOGIN_SUCCESS})
            console.log("in check login in the token", token)
            localStorage.setItem('token', token)
        },(e)=>{
            localStorage.removeItem("token")
            console.log("in check login in failure", e)
            dispatch({type: userConstants.LOGIN_FAILURE, error: e.toString()})
        })
    }
}


function logout() {
    userService.logout()
    return { type: userConstants.LOGOUT }
}




function register(user){
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }

    return dispatch=>{
        dispatch(request(user))

        userService.register(user)
            .then(
                user=>{
                    dispatch(success(user));
                    // history.push('/login');
                    dispatch(alertActions.success("register successful"));
                },
                    error=>{
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
    };
}



