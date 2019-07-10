import {userConstants} from "../../actions/constants";

export function logOut(state = {},action) {
    switch (action.type) {
        case userConstants.LOGOUT:
            return {
                ...state,
                loggedIn:false
            }}
}
