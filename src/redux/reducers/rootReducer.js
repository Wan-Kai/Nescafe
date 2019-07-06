import {combineReducers} from "redux";

import {authentication} from './loginReducer'
import {registration} from "./registerReducer";
import {alert} from "./alertReducers";

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
});

export default rootReducer;
