import { toast } from "react-toastify";
import { history } from "../../../../history";
import Axios from "../../../../pre/request"

export const getShiftWorker = async (data, dispatch) => {
    let rdata = await Axios("POST", data, "api/worker/get-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return [];
    }
}

export const acceptShift = async (data, dispatch) => {
    let rdata = await Axios("POST", data, "api/worker/accept-shift", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
        history.push("/worker-upcoming-shifts")
    } else {
        toast.error(rdata.data)
    }
}

export const getCurrentShiftWorker = async (dispatch) => {
    let rdata = await Axios("POST", "", "api/worker/get-current-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return []
    }
}

export const cancelShift = async (id, dispatch) => {
    let rdata = await Axios("POST", {id}, "api/worker/cancel-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        toast.error(rdata.data)
        return []
    }
}

export const sendClockIn = async (id, dispatch) => {
    let rdata = await Axios("POST", {id}, "api/worker/click-in", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
    } else {
        toast.error(rdata.data)
    }
}