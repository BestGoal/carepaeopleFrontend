import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { history } from "../../../history";
import ReactCodeInput from 'react-verification-code-input';

export default function Login() {

    const Confirm = async (value) => {
        alert(value)
        history.push("/login")
    }

    return (
        <Container className="d-flex p-1 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-3 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> Verification Code </Typography>
                <ReactCodeInput className="mt-1" onComplete={(value)=>Confirm(value)} />
            </Box>
        </Container>
    )
}