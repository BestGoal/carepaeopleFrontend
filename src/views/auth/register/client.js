import React from "react"
import Box from "@material-ui/core/Box"
import Button from '@material-ui/core/Button'

export default function Register() {
    return (
        <Box className="auth-register d-flex">
            <Box className="register-main-card text-align-center">
                <Box>
                    <Button className="bg-theme color-white text-capitalize register-btn" onClick={(e) => console.log()}> Wants to hire ? </Button>
                </Box>
                <Box className="mt-4">
                    <Button className="bg-theme color-white text-capitalize register-btn" onClick={(e) => console.log()}> Wants to work ? </Button>
                </Box>
            </Box>
        </Box>
    )
}