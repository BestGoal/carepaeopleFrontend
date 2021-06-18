import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { toast } from "react-toastify"
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { history } from "../../../history";
import { SignUpRequest } from "../../../redux/action/auth/loginRequests"
import { LoginAction } from "../../../redux/action/auth/loginActions"
import { permissionData } from "../../../configs/index"

export default function ClientRegister() {

    const dispatch = useDispatch();

    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [companyName, SetCompanyName] = useState("");
    const [companyWebsite, SetCOmpanyWebsite] = useState("");
    const [streetNumber, SetStreetNumber] = useState("");
    const [streetName, SetStreetName] = useState("");
    const [city, SetCity] = useState("");
    const [province, SetProvince] = useState("");
    const [country, SetCountry] = useState("");
    const [zipcode, SetZipcode] = useState("");
    const [email, SetEmail] = useState("");
    const [phoneNumber, SetPhoneNumber] = useState("");
    const [password, SetPassword] = useState({
        value: "",
        show: false
    });
    const [repassword, SetRePassword] = useState({
        value: "",
        show: false
    });
    const [companyDescription, SetCompanyDescription] = useState("");
    const [isAccept, setIsAccept] = useState(false)

    const handlePasswordChange = (prop) => (event) => {
        SetPassword({ ...password, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        SetPassword({ ...password, show: !password.show });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleRePasswordChange = (prop) => (event) => {
        SetRePassword({ ...repassword, [prop]: event.target.value });
    };
    const handleClickShowRePassword = () => {
        SetRePassword({ ...repassword, show: !repassword.show });
    };
    const handleMouseDownRePassword = (event) => {
        event.preventDefault();
    };

    const signUp = async () => {

        const validator = () => {
            if (!firstName) return "Please Input firstname correct";
            if (!lastName) return "Please Input lastname correct";
            if (!companyName) return "Please Input companyname correct";
            if (!companyWebsite) return "Please Input companywebsite correct";
            if (!streetNumber) return "Please Input streetNumber correct";
            if (!streetName) return "Please Input streetName correct";
            if (!city) return "Please Input city correct";
            if (!province) return "Please Input province correct";
            if (!country) return "Please Input country correct";
            if (!zipcode) return "Please Input zipcode correct";
            if (!email) return "Please Input email correct";
            if (!phoneNumber) return "Please Input phonenumber correct";
            if (!password.value) return "Please Input password correct";
            if (!repassword.value) return "Please Input repassword correct";
            if (!companyDescription) return "Please Input company description correct";
            if (password.value !== repassword.value) return "Please Input password correctly";
            if (!isAccept) return "You have to accept our term of service"
            return true;
        }

        let flag = validator();
        if (flag === true) {
            let sendData = { 
                firstName, lastName, companyName, companyWebsite, streetNumber, streetName, city, province, country, zipcode, email, 
                phoneNumber, password: password.value, companyDescription, permission: permissionData.client
            }
            let rdata = await SignUpRequest(sendData, dispatch);
            if(rdata) {
                dispatch(LoginAction(true, rdata))
                history.push("/client-home")
            }
        } else {
            toast.error(flag);
        }
    }

    return (
        <Container className="container pt-2 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-3 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> SIGN UP TO POST SHIFTS </Typography>
                <Grid container spacing={2} className="mt-1">
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="First Name" value={firstName} onChange={(e) => SetFirstName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Last Name" value={lastName} onChange={(e) => SetLastName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Company Name" value={companyName} onChange={(e) => SetCompanyName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Company Website" value={companyWebsite} onChange={(e) => SetCOmpanyWebsite(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Street Number" value={streetNumber} onChange={(e) => SetStreetNumber(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Street Name" value={streetName} onChange={(e) => SetStreetName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="City" value={city} onChange={(e) => SetCity(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Province" value={province} onChange={(e) => SetProvince(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Country" value={country} onChange={(e) => SetCountry(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Zipcode" value={zipcode} onChange={(e) => SetZipcode(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Email" value={email} onChange={(e) => SetEmail(e.currentTarget.value)} type="email" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Phone Number" value={phoneNumber} onChange={(e) => SetPhoneNumber(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined">
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
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="re-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="re-password"
                                type={repassword.show ? 'text' : 'password'}
                                value={repassword.value}
                                onChange={handleRePasswordChange('value')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowRePassword}
                                            onMouseDown={handleMouseDownRePassword}
                                            edge="end"
                                        >
                                            {repassword.show ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField
                            label="Company Description"
                            multiline
                            fullWidth
                            rows={3}
                            variant="outlined"
                            value={companyDescription}
                            onChange={(e) => SetCompanyDescription(e.currentTarget.value)}
                        />
                    </Grid>
                    <Grid item md={12} xs={12} className="p-0">
                        <Typography className="crusor-pointer" onClick={() => setIsAccept(!isAccept)}>
                            <Checkbox color="primary" checked={isAccept} />
                            By clicking Sign Up, you agree to CARESHIFTS' Terms of Service and Privacy Policy.
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button onClick={() => signUp()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign Up </Button>
                    </Grid>
                    <Grid item md={12} xs={12} className="d-flex justify-content-center p-0">
                        <Typography>Already have an account?&nbsp;&nbsp;&nbsp;</Typography>
                        <Typography className="font-weight-bold crusor-pointer" onClick={() => history.push("/login")}> Please Sign In. </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}