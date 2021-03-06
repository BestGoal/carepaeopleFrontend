import axios from "axios";
import { setLoading } from "../redux/action/base";
import { Root } from "./config"

const Axios = async (method, data, url, dispatch, loading = false) => {
    const options = { 
        method, 
        url: Root.adminUrl + url, 
        data,
        headers: {
            "authorization": `${localStorage.getItem("careshifts-token")}`,
            "Content-Type": "application/json",
            "timeout": 5000
        }
    };
    if(loading) {
        dispatch(setLoading(true))
    }
    let rdata = await axios(options);
    if(loading) {
        dispatch(setLoading(false))
    }
    if (rdata.status === 200 && rdata.data) {
        return rdata.data
    } else {
        return { status: false, data: "connect error" }
    }
}

export default Axios