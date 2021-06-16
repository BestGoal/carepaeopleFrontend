import { toast } from "react-toastify"
import Axios from "../../../pre/request"

export const SignUpRequest = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/auth/signup", dispatch, true)
    if(rdata.status) {
        toast.success(rdata.data)
        return rdata.userInfo
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const SignInRequest = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/auth/signin", dispatch, true)
    if(rdata.status) {
        toast.success(rdata.data)
        return rdata.userInfo
    } else {
        toast.error(rdata.data)
        return false;
    }
}