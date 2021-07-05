import { toast } from "react-toastify"
import Axios from "../../../../pre/request"

export const postShiftDirect = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/client/create-shift", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
        return true
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const getShiftDirect = async (dispatch) => {
    let rdata = await Axios("POST", "", "api/client/get-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return [];
    }
}