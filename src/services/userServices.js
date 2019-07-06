import axios from 'axios'

export const userService = {
    login,
    logout,
    register,
    updateInfo
}

let baseConfigs = {
    baseURL : 'https://scf.intellizhi.cn',

    url : '/',

    method:'post',

    params: {

    },

    header:{
        'Content-Type': 'application/json',
    },

    data: {

    },

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: '',

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    // withCredentials: true, // default

    responseType:'json',

    maxContentLength: 2000,

    validateStatus(status) {
        return status >= 200 && status < 300 // default
    },
}

function login(username, password, callback_success,callback_failure) {
    axios({...baseConfigs,
        url:'/user/login',params: {username:username,password:password},timeout: '5000'})
        .then(response=>{
            console.log('in login_then',response.data)
            localStorage.setItem('token',response.data.data['X-Auth-Token'])
            callback_success();
        })//todo .then add more action
        .catch((e)=>{
            console.log('exception in login_service ',e.toString())
            callback_failure()
        })
}


function logout(){

}
//type of === array/json
function register(registerInfo){

}

function updateInfo(user){

}
