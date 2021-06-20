import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { toast } from "react-toastify"
import { history } from "../../../history";
import { LoginAction } from "../../../redux/action/auth/loginActions"
import { SignInRequest } from "../../../redux/action/auth/loginRequests"
import { permissionData } from "../../../configs/index"

export default function Login() {

    const dispatch = useDispatch();

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState({
        value: "",
        show: false
    });
    const [saved, SetSaved] = useState(false)

    const handlePasswordChange = (prop) => (event) => {
        SetPassword({ ...password, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        SetPassword({ ...password, show: !password.show });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signIn = async () => {
        const validator = () => {
            if (!email) return "Please Input email correct";
            if (!password.value) return "Please Input password correct";
            return true;
        }

        let flag = validator();
        if (flag === true) {
            let sendData = { 
                email, 
                password: password.value
            }
            let rdata = await SignInRequest(sendData, dispatch);
            if(rdata) {
                dispatch(LoginAction(true, rdata))
                if(rdata.permission === permissionData.worker) {
                    history.push("/worker-home")    
                } else if(rdata.permission === permissionData.client) {
                    history.push("/client-home")    
                }
            }
        } else {
            toast.error(flag);
        }
    }

    return (
        <Container className="d-flex p-1 auth container">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-3 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> SIGN IN </Typography>
                <Grid container spacing={2} className="mt-1">
                    <Grid item xs={12}>
                        <TextField fullWidth variant="outlined" label="Email Address" value={email} onChange={(e)=>SetEmail(e.currentTarget.value)} />
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
                        <Typography className="crusor-pointer" onClick={()=>SetSaved(!saved)}>
                            <Checkbox color="primary" className="p-0" checked={saved} />
                            Keep me signed in on this device
                        </Typography>
                        <Typography className="crusor-pointer" onClick={()=>history.push("/recover-password")}> Recover password </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button onClick={() => signIn()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign In </Button>
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