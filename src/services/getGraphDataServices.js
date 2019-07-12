import axios from 'axios'
import {baseConfigs} from "./configs";

const header = {
    "X-Auth-Token":localStorage.getItem("token"),
    "X-Requested-With":"XMLHttpRequest"
}

export function GetGraphData(type,callback_success,callback_failure){
    axios({...baseConfigs,url:'/user/creditInfo',timeout:5000,
        method:'get',headers:header
    })
        .then((response)=>{
            console.log("service print: ",response)
            if(response.data.code>=200&&response.data.code<=300){
                if(response.data["data"]){
                    callback_success(response.data.data["creditInfo"])
                }
            }else{
                callback_failure(response.data)
            }
        }).catch((err)=>{
            console.log(header)
            callback_failure(err)
    })
}
