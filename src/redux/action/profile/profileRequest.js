import { toast } from "react-toastify"
import Axios from "../../../pre/request"

export const ProfileUpdate = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/profile/update", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
        return rdata.userInfo
    } else {
        toast.error(rdata.data)
        return false;
    }
}