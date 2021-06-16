import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import { toast } from "react-toastify"
import { history } from "../../../history";

export default function Login() {

    const [email, SetEmail] = useState("")

    const RecoverPass = async () => {
        const validator = () => {
            if (!email) return "Please Input email correct";
            return true;
        }

        let flag = validator();
        if (flag === true) {
            history.push("/confirm-user")
        } else {
            toast.error(flag);
        }
    }

    return (
        <Container className="d-flex p-1 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-3 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> Recovery Password </Typography>
                <Grid container spacing={2} className="mt-1">
                    <Grid item xs={12}>
                        <TextField fullWidth variant="outlined" label="Email Address" value={email} onChange={(e)=>SetEmail(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={12} xs={12} className="d-flex">
                        <Button onClick={() => RecoverPass()} className="text-capitalize" fullWidth color="primary" variant="contained"> Send Email </Button>
                        <Button onClick={() => history.push("/login")} className="ml-1 text-capitalize" fullWidth variant="contained"> Back </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}