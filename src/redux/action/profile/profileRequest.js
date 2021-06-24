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

export const getWorkerDocument = async (dispatch) => {
    let rdata = await Axios("GET", "", "api/profile/document", dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const addWorkerDocument = async (sendData, dispatch) => {
    let rdata = await Axios("POST", sendData, "api/profile/document", dispatch, true)
    console.log(rdata)
    if (rdata.status) {
        return rdata.data
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const getWorkerDocumentWithId = async (id, dispatch) => {
    let rdata = await Axios("GET", "", `api/profile/document/${id}`, dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const removeWorkerDocumentWithId = async (url, documentId, dispatch) => {
    let rdata = await Axios("DELETE", { url, documentId }, `api/profile/document`, dispatch, true)
    if (rdata.status) {
        return rdata.data
    } else {
        toast.error(rdata.data)
        return false;
    }
}

export const sendDownload = async (url) => {
    Axios("GET", "", `api/profile/document/download?url=${url}`)
}
