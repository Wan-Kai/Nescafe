import axios from 'axios'
import {baseConfigs} from './configs'
export const userService = {
    login,
    logout,
    register,
    updateInfo
}


function login(username, password, callback_success,callback_failure) {
    axios({...baseConfigs,
        url:'/user/login',params: {username:username,password:password},timeout: '5000'})
        .then(response=>{
            console.log('in login_then',response.data)
            localStorage.setItem('token',response.data.data['X-Auth-Token'])
            callback_success();
            // return true
        })//todo .then add more action
        .catch((e)=>{
            console.log('exception in login_service ',e.toString())
            callback_failure(e)
            // return false
        })

}


function logout(){

}
//type of === array/json
function register(registerInfo){

}

function updateInfo(user){

}