import { alertConstants} from "./constants";

export const alertActions = {
    success,
    error,
    clear,//something unknown
};

function success(message){
    return {type:alertConstants.SUCCESS,message};
}

function error(message) {
    return {type: alertConstants.ERROR,message}
}

function clear() {
    return{type:alertConstants.CLEAR}
}