import axios from 'axios'
import {baseConfigs} from "./configs";

export function GetGraphData(type,callback_success,callback_failure){
    axios({...baseConfigs,
        url:'user/creditInfo',timeout:5000,
        method:'get',headers:{
            'X-Auth-Token':localStorage.getItem("token").toString(),
            'X-Requested-With':'XMLHttpRequest'
        }
    })
        .then((response)=>{
            console.log(baseConfigs.headers)
            console.log("service print: ",response)
            if(response.data.code>=200&&response.data.code<=300){
                if(response.data["data"]){
                    callback_success(response.data.data["creditInfo"])
                }
            }else{
                callback_failure(response.data)
            }
        })
        .catch((err)=>{
        console.log({...baseConfigs,
            url:'user/creditInfo',timeout:5000,
            method:'get',headers:{
                'X-Auth-Token':localStorage.getItem("token").toString(),
                'X-Requested-With':'XMLHttpRequest'
            }
        })

        callback_failure(err)
    })
}
