import React from "react"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import { history } from "../../../history"
import { Root } from "../../../pre/config"

export default function Register() {
    return (
        <Container className="auth">
            <Box className="auth-register d-flex">
                <Box className="d-flex flex-direction-column theme-box-shadow text-align-center p-3 bg-white register-main-card">
                    <Box className="bg-theme theme-border-radius color-white text-capitalize p-2 crusor-pointer" onClick={(e) => history.push("/client-register")}>
                        Post Shifts
                    </Box>
                    <Box className="bg-theme theme-border-radius color-white text-capitalize p-2 crusor-pointer mt-1" onClick={(e) => history.push("/worker-register")}>
                        Work Shifts
                    </Box>
                    <Box className="d-flex justify-content-center align-items-center mt-1">
                        <img className="crusor-pointer register-app-img" src={Root.adminUrl + "app/appstore.png"} alt="" />
                        <img className="crusor-pointer register-app-img" src={Root.adminUrl + "app/googlestore.png"} alt="" />
                        <img className="crusor-pointer register-app-img-qr" src={Root.adminUrl + "app/qrcode.png"} alt="" />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}