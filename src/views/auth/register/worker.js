import React from "react"
import { useDispatch } from 'react-redux'
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import InputLabel from '@material-ui/core/InputLabel';
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'
import { history } from "../../../history";
import { Login_func } from "../../../redux/action/auth/loginActions"
import { locationData } from "../../../configs/index"

export default function WorkerRegister() {

    const dispatch = useDispatch();

    const signUp = () => {
        dispatch(Login_func(true, { permission: "worker" }))
        history.push("/worker-home")
    }

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container className="d-flex p-1 auth">
            <Box className="register-client-card theme-box-shadow bg-white text-align-center p-2 m-auto">
                <Typography className="font-weight-bold register-header m-2" variant="h5"> SIGN UP TO WORK </Typography>
                <Grid container spacing={2} className="mt-2">
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="First Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Last Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Email" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Address" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Street Number" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Street Name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Apartment Number" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="City" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Province" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Country" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="ZipCode" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Phone Number" />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            fullWidth
                            options={locationData}
                            getOptionLabel={(option) => option.title}
                            value={locationData[0]}
                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        {/* <TextField fullWidth variant="outlined" label="Password" /> */}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        {/* <TextField fullWidth variant="outlined" label="Password" /> */}
                    </Grid>
                    <Grid item md={12} xs={12} className="p-0">
                        <Typography>
                            <Checkbox color="primary" />
                            By clicking Sign Up, you agree to CARESHIFTS' Terms of Service and Privacy Policy.
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Button onClick={() => signUp()} className="text-capitalize" fullWidth color="primary" variant="contained"> Sign Up </Button>
                    </Grid>
                    <Grid item md={12} xs={12} className="d-flex justify-content-center p-0">
                        <Box> Already have an account?&nbsp;<Typography className="font-weight-bold crusor-pointer"> Please Sign In. </Typography></Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}