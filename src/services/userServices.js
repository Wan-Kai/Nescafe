import axios from 'axios'
import {baseConfigs} from './configs'
import {userConstants} from "../actions/constants";
export const userService = {
    login,
    logout,
    register,
    checkLogin,
    updateInfo
}


function login(username, password, callback_success,callback_failure) {
    axios({...baseConfigs,
        url:'/user/login',params: {username:username,password:password},timeout: '5000'})
        .then(response=>{
            if(response.data.code>=200&&response.data.code<=300){
                console.log(response)
                localStorage.setItem('token',response.data.data['X-Auth-Token'])
                callback_success();
            }else {
                console.log(response)
                callback_failure("wrong password")
            }
        })//todo .then add more action
        .catch((e)=>{
            console.log('exception in login_service ',e.toString())
            callback_failure(e)
            // return false
        })
}

function checkLogin(token,callback_success,callback_failure) {
    console.log("in service function")
    axios({...baseConfigs, url: '/user/check', timeout: '5000', header: {'X-Auth-Token': token}})
        .then((response) => {
            if (response.data.code>=200&&response.data.code<=300) {
                token = response.data["X-Auth-Token"]
                console.log("in service function")
                callback_success(token)
            } else {
                console.log("have been remove it after validator");
                callback_failure("out of time")
            }
        }).catch((e) => {
            callback_failure(e.toString())
    })


}


function logout(){

}
//type of === array/json
function register(registerInfo){

}

function updateInfo(user){

}
