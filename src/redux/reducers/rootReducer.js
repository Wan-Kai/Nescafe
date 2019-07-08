import {combineReducers} from "redux";

import {authentication} from './loginReducer'
import {registration} from "./registerReducer";
import {alert} from "./alertReducer";
import {IAFReducer} from "./IAFReducer"

const rootReducer = combineReducers({
    authentication,
    IAFReducer,
    registration,
    alert,
});

export default rootReducer;
