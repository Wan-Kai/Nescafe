import {combineReducers} from "redux";

import {authentication} from './loginReducer'
import {registration} from "./registerReducer";
import {transport} from "./graphDataReducer";
import {submitFormData} from "./submitDataReducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    transport,
    submitFormData,
});

export default rootReducer;
