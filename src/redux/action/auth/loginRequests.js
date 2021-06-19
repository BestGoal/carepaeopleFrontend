import { toast } from "react-toastify"
import Axios from "../../../pre/request"

export const SignUpRequest = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/auth/signup", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
        localStorage.setItem("careshifts-token", rdata.token)
        return rdata.userInfo
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const SignInRequest = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/auth/signin", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
        localStorage.setItem("careshifts-token", rdata.token)
        return rdata.userInfo
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const sessionCheck = async () => {
    try {
        let rdata = await Axios("GET", "", "api/auth/sessionCheck")
        if (rdata) {
            if (rdata.status) {
                return {
                    auth: {
                        isAuth: true,
                        userData: rdata.data,
                    }
                }
            } else {
                return { auth: { isAuth: false } }
            }
        } else {
            return { auth: { isAuth: false } }
        }
    } catch (e) {
        return { auth: { isAuth: false } }
    }
}