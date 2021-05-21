import React from "react"
import Box from "@material-ui/core/Box"
import Button from '@material-ui/core/Button'
import { history } from "../../../history"

import AppStore from "../../../asset/image/appstore.png"
import GoogleStore from "../../../asset/image/googlestore.png"
import QrCode from "../../../asset/image/qrcode.png"

export default function Register() {
    return (
        <Box className="auth-register d-flex">
            <Box className="register-main-card text-align-center pt-5 p-1">
                <Box>
                    <Button className="text-capitalize register-btn" color="primary" variant="contained" onClick={(e) => history.push("/client-register")}> Wants to hire ? </Button>
                </Box>
                <Box className="mt-3">
                    <Button className="text-capitalize register-btn" color="primary" variant="contained" onClick={(e) => history.push("/worker-register")}> Wants to work ? </Button>
                </Box>
                <Box className="d-flex justify-content-center align-items-center mt-1">
                    <img className="register-app-img" src={AppStore} alt="" />
                    <img className="register-app-img" src={GoogleStore} alt="" />
                    <img className="register-app-img-qr" src={QrCode} alt="" />
                </Box>
            </Box>
        </Box>
    )
}