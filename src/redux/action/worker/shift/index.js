import Axios from "../../../../pre/request"

export const getShiftWorker = async (data, dispatch) => {
    let rdata = await Axios("POST", data, "api/worker/get-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return [];
    }
}