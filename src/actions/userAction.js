import {userConstants} from "./constants";
import { userService } from "../services/userServices";
import { alertActions } from "./alertAction";

export const userActions = {
    login,
    logout,
    register,
};

//todo  改成之间返回对象的action
function login(username,password){
    function request(user) { return{type:userConstants.LOGIN_REQUEST,user} }
    function success(user) { return{type:userConstants.LOGIN_SUCCESS,user} }
    function failure(error) { return{type:userConstants.LOGIN_FAILURE,error} }

    return dispatch=>{
        dispatch(request({username}));
        userService.login(username,password,()=>dispatch(success(username)),(e)=>dispatch(failure(e)))
    };
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



