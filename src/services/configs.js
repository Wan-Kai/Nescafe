export const baseConfigs = {
    baseURL : 'https://scf.intellizhi.cn',

    url : '/',

    method:'post',

    params: {

    },

    headers:{
        'X-Requested-With': 'XMLHttpRequest',
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

export const header = {

}
