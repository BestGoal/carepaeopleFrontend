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
import { history } from "../../../history";
import { SignUpRequest } from "../../../redux/action/auth/loginRequests"
import { Login_func } from "../../../redux/action/auth/loginActions"

export default function ClientRegister() {

    const [ firstName, SetFirstName ] = useState("");
    const [ lastName, SetLastName ] = useState("");
    const [ companyName, SetCompanyName ] = useState("");
    const [ companyWebsite, SetCOmpanyWebsite ] = useState("");
    const [ address, SetAddress ] = useState("");
    const [ email, SetEmail ] = useState("");
    const [ phoneNumber, SetPhoneNumber ] = useState("");
    const [ companyType, SetCompanyType ] = useState("");
    const [ password, SetPassword ] = useState("");
    const [ repassword, SetRePassword ] = useState("");
    const [ companyDescription, SetCompanyDescription ] = useState("");
    const [ isAccept, setIsAccept ] = useState(false)

    const dispatch = useDispatch();

    const signUp = async () => {

        const validator = () => {
            if(!firstName) return "Please Input firstname correct";
            if(!lastName) return "Please Input lastname correct";
            if(!companyName) return "Please Input companyname correct";
            if(!companyWebsite) return "Please Input companywebsite correct";
            if(!address) return "Please Input address correct";
            if(!email) return "Please Input email correct";
            if(!phoneNumber) return "Please Input phonenumber correct";
            if(!companyType) return "Please Input companytype correct";
            if(!password) return "Please Input password correct";
            if(!repassword) return "Please Input repassword correct";
            if(!companyDescription) return "Please Input company description correct";
            if(password !== repassword) return "Please Input password correctly";
            if(!isAccept) return "You have to accept our term of service"
            return true;
        }

        let flag = validator();
        if(flag === true) {
            let sendData = {
                firstName,
                lastName,
                companyName,
                companyWebsite,
                address,
                email,
                phoneNumber,
                companyType,
                password,
                companyDescription,
                permission: "client"
            }
            let rdata = await SignUpRequest(sendData, dispatch);
            console.log(rdata)
            // dispatch(Login_func(true, { permission: "client" }))
            // history.push("/client-home")
        } else {
            toast.error(flag);
        }
    }

    return (
        <Container className="p-1 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-2 m-auto">
                <Typography className="font-weight-bold mt-1" variant="h5"> SIGN UP TO HIRE </Typography>
                <Grid container spacing={2} className="mt-1">
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="First Name" value={firstName} onChange={(e)=>SetFirstName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Last Name" value={lastName} onChange={(e)=>SetLastName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Company Name" value={companyName} onChange={(e)=>SetCompanyName(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Company Website" value={companyWebsite} onChange={(e)=>SetCOmpanyWebsite(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Address" value={address} onChange={(e)=>SetAddress(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Email" value={email} onChange={(e)=>SetEmail(e.currentTarget.value)} type="email" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Phone Number" value={phoneNumber} onChange={(e)=>SetPhoneNumber(e.currentTarget.value)} type="Number" />
                    </Grid>
                    <Grid item md={6} xs={12} >
                        <TextField fullWidth variant="outlined" label="Company Type" value={companyType} onChange={(e)=>SetCompanyType(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Password" value={password} onChange={(e)=>SetPassword(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Confirm Password" value={repassword} onChange={(e)=>SetRePassword(e.currentTarget.value)} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField
                            label="Company Description"
                            multiline
                            fullWidth
                            rows={3}
                            variant="outlined"
                            value={companyDescription} 
                            onChange={(e)=>SetCompanyDescription(e.currentTarget.value)}
                        />
                    </Grid>
                    <Grid item md={12} xs={12} className="p-0">
                        <Typography className="crusor-pointer" onClick={()=>setIsAccept(!isAccept)}>
                            <Checkbox color="primary" checked={isAccept} />
                            By clicking signup, you agree to Healthcare Terms of Service and Privacy Policy.
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button onClick={() => signUp()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign Up </Button>
                    </Grid>
                    <Grid item md={12} xs={12} className="d-flex justify-content-center p-0">
                        <Box> Already have an account?&nbsp;<Typography className="font-weight-bold crusor-pointer" onClick={() => history.push("/login")}> Please Signin. </Typography></Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}