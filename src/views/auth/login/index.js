import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import { history } from "../../../history";
import { Login_func } from "../../../redux/action/auth/loginActions"
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Login() {

    const dispatch = useDispatch();
    const [password, SetPassword] = useState({
        value: "",
        show: false
    });
    const handlePasswordChange = (prop) => (event) => {
        SetPassword({ ...password, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        SetPassword({ ...password, show: !password.show });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const signUp = () => {
        dispatch(Login_func(true, { permission: "client" }))
        history.push("/client-home")
    }

    return (
        <Container className="d-flex p-1 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-3 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> SIGN IN </Typography>
                <Grid container spacing={2} className="mt-1">
                    <Grid item xs={12}>
                        <TextField fullWidth variant="outlined" label="Email Address" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={password.show ? 'text' : 'password'}
                                value={password.value}
                                onChange={handlePasswordChange('value')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {password.show ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className="d-flex justify-content-between align-items-center">
                        <Typography className="crusor-pointer">
                            <Checkbox color="primary" className="p-0" />
                            Keep me signed in on this device
                        </Typography>
                        <Typography className="crusor-pointer"> Recover password </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button onClick={() => signUp()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign In </Button>
                    </Grid>
                    <Grid item md={12} xs={12} className="d-flex justify-content-center p-0">
                        <Typography>Don't have account?&nbsp;&nbsp;&nbsp;</Typography>
                        <Typography className="font-weight-bold crusor-pointer" onClick={()=>history.push("/register")}> Please Sign Up. </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}