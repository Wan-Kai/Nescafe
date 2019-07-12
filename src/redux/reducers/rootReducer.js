import {combineReducers} from "redux";

import {authentication} from './loginReducer'
import {registration} from "./registerReducer";
import {transport} from "./graphDataReducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    transport,
});

export default rootReducer;
