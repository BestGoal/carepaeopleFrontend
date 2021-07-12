import { toast } from "react-toastify"
import Axios from "../../../../pre/request"
import { CLIENT_PREVIEW_SHIFT, CLIENT_EDIT_SHIFT } from "../../../type"
import { history } from "../../../../history"

export const sentToPreview = async (sendData, dispatch) => {
    dispatch({
        type: CLIENT_PREVIEW_SHIFT,
        data: sendData
    })
    history.push("/client-preview")
}

export const sentToEdit = async (sendData, dispatch) => {
    dispatch({
        type: CLIENT_EDIT_SHIFT,
        data: sendData
    })
    history.push("/client-post")
}

export const postShiftDirect = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/client/create-shift", dispatch, true)
    if (rdata.status) {
        toast.success(rdata.data)
        sentToEdit({}, dispatch)
        history.push("/client-post")
        sentToPreview({}, dispatch)
        return true
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const getShiftDirect = async (data, dispatch) => {
    let rdata = await Axios("POST", data, "api/client/get-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return [];
    }
}

export const removeShiftDirect = async (data, dispatch) => {
    let rdata = await Axios("POST", data, "api/client/remove-shift", dispatch, true)
    if (rdata.status) {
        toast.success("Success")
        return rdata.data
    } else {
        toast.error("Failure")
        return [];
    }
}

export const getCurrentShift = async (dispatch) => {
    let rdata = await Axios("POST", "", "api/client/get-current-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return [];
    }
}

export const cancelCurrentShift = async (data, dispatch) => {
    let rdata = await Axios("POST", data, "api/client/cancel-current-shift", dispatch, true)
    if (rdata.status) {
        toast.success("Success")
        return rdata.data
    } else {
        toast.error("Failure")
        return [];
    }
}

export const getProgressShift = async (dispatch) => {
    let rdata = await Axios("POST", "", "api/client/get-progress-shift", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        return [];
    }
}