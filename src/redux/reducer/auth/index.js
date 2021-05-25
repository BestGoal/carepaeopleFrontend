import { SET_USER_DATA } from "../../type"

const preState = {
    isAuth: false,
    userData: {}
}

const auth = ( state = preState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return { ...state, isAuth: action.payload, userData: action.data };
        default: 
            return state
    }
}

export default auth;