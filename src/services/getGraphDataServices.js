import axios from 'axios'
import {baseConfigs} from "./configs";

export function GetGraphData(type,callback_success,callback_failure){
   let configs = {}
    if(type==='ScatteredEchart') {
        configs = {
            ...baseConfigs,
            url: 'user/creditInfo', timeout: 5000,
            method: 'get', headers: {
                'X-Auth-Token': localStorage.getItem("token").toString(),
                'X-Requested-With': 'XMLHttpRequest'
            }
        }

    }else if(type==='infoData'){
        configs = {
            ...baseConfigs,
            url: 'user/info', timeout: 5000,
            method: 'get', headers: {
                'X-Auth-Token': localStorage.getItem("token").toString(),
                'X-Requested-With': 'XMLHttpRequestXM'
            }
        }
    }else if(type==='historyTrade'){
        configs = {
            ...baseConfigs,
            url:"user/historyTrade",
            timeout:4000,
            method:'get',
            headers:{
                'X-Auth-Token':localStorage.getItem('token'),
                'X-Requested-With':'XMLHttpRequest'
            }
        }
    }
        axios(configs)
        .then((response)=>{
            console.log(baseConfigs.headers)
            console.log("service print: ",response)
            if(response.data.code>=200&&response.data.code<=300){
                if(type==='ScatteredEchart'){
                    const values = response.data["data"]["creditInfo"]
                    callback_success(values[values.length-1])
                }else if(type==='infoData'){
                    const values = response.data["data"]["userInfo"]
                    callback_success(values)
                }else if(type==='historyTrade'){
                    const values = response.data['data']['historyTrade']
                    console.log("??????????????????",values)
                    callback_success(values)
                }
            }else{
                callback_failure(response.data)
            }
        })
        .catch((err)=>{
        callback_failure(err)
    })
}
