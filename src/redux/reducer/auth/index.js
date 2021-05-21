import { SET_USER_DATA } from "../../type"

const preState = {
    isAuth: false
}

const auth = ( state = preState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return { ...state, isAuth: action.payload };
        default: 
            return state
    }
}

export default auth;