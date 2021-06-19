import { SET_USER_DATA } from "../../type"

export const LoginAction = (key, userData) => {
    return {
        type: SET_USER_DATA,
        payload: key,
		data: userData
    }
}