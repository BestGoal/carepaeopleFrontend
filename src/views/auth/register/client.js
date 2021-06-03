import React from "react"
import { useDispatch } from 'react-redux'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import InputLabel from '@material-ui/core/InputLabel';
import TextMaskCustom from "../../baseComponent/TextMaskCustom"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { history } from "../../../history";
import { Login_func } from "../../../redux/action/auth/loginActions"

export default function ClientRegister() {

    const dispatch = useDispatch();

    const signUp = () => {
        dispatch(Login_func(true, { permission: "client" }))
        history.push("/client-home")
    }

    return (
        <Container className="d-flex p-1 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-2 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> SIGN UP TO HIRE </Typography>
                <Grid container spacing={2} className="mt-1">
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="First Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Last Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Company Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Company Website" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Address" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Email" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel variant="outlined" htmlFor="phone-number">Phone Number</InputLabel>
                            <OutlinedInput
                                name="textmask"
                                id="phone-number"
                                label="Phone Number"
                                inputComponent={TextMaskCustom}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <TextField fullWidth variant="outlined" label="Company Type" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Password" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Confirm Password" />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField
                            label="Company Description"
                            multiline
                            fullWidth
                            rows={3}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={12} xs={12} className="p-0">
                        <Typography>
                            <Checkbox color="primary" />
                            By clicking signup, you agree to Healthcare Terms of Service and Privacy Policy.
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button onClick={() => signUp()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign Up </Button>
                    </Grid>
                    <Grid item md={12} xs={12} className="d-flex justify-content-center p-0">
                        <Box> Already have an account?&nbsp;<Typography className="font-weight-bold crusor-pointer"> Please Signin. </Typography></Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}