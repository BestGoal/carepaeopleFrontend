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

export default function WorkerRegister() {

    const dispatch = useDispatch();

    const signUp = () => {
        dispatch(Login_func(true, { permission: "worker" }))
        history.push("/worker-home")
    }

    return (
        <Container>
            <Box className="auth-client-register d-flex p-1">
                <Box className="register-client-card text-align-center">
                    <Typography className="font-weight-bold register-header m-2 pb-2" variant="h5"> SIGN UP TO WORK </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="First Name" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Last Name" />
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
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Address" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Email" />
                        </Grid>
                        <Grid item md={6} xs={12} >
                            <TextField fullWidth variant="outlined" label="Refferal code" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Password" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Confirm Password" />
                        </Grid>
                        <Grid item md={12} xs={12} className="p-0">
                            <Typography>
                                <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                                By clicking signup, you agree to Healthcare Terms of Service and Privacy Policy.
                            </Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Button onClick={() => signUp()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign Up </Button>
                        </Grid>
                        <Grid item md={12} xs={12} className="d-flex justify-content-center p-0">
                            <Typography> Already have an account? </Typography>
                            &nbsp;
                            <Typography className="font-weight-bold crusor-pointer"> Please Signin. </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}