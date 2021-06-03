import React from "react"
import Box from "@material-ui/core/Box"
import { history } from "../../../history"
import Container from "@material-ui/core/Container"

import AppStore from "../../../asset/image/appstore.png"
import GoogleStore from "../../../asset/image/googlestore.png"
import QrCode from "../../../asset/image/qrcode.png"

export default function Register() {
    return (
        <Container className="auth">
            <Box className="auth-register d-flex">
                <Box className="d-flex flex-direction-column theme-box-shadow text-align-center p-3 bg-white register-main-card">
                    <Box className="bg-theme theme-border-radius color-white text-capitalize p-2 crusor-pointer" onClick={(e) => history.push("/client-register")}> 
                        Wants to hire ?
                    </Box>
                    <Box className="bg-theme theme-border-radius color-white text-capitalize p-2 crusor-pointer mt-1" onClick={(e) => history.push("/worker-register")}> 
                        Wants to work ?
                    </Box>
                    <Box className="d-flex justify-content-center align-items-center mt-1">
                        <img className="crusor-pointer register-app-img" src={AppStore} alt="" />
                        <img className="crusor-pointer register-app-img" src={GoogleStore} alt="" />
                        <img className="crusor-pointer register-app-img-qr" src={QrCode} alt="" />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}