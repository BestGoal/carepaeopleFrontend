import { toast } from "react-toastify"
import Axios from "../../../pre/request"

export const SignUpRequest = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/auth/signup", dispatch, true)
    if(rdata.status) {
        toast.success("success")
        return rdata.data
    } else {
        toast.error(rdata.data)
    }
}