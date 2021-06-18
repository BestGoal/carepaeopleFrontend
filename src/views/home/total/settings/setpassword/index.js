import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "@material-ui/core/Button"

export default function InputAdornments() {
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
        <Container className="container pt-2 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> CHANGE PASSWORD </Typography>
            </Box>
            <Box className="theme-border theme-box-shadow theme-border-radius p-2">
                <FormControl fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">Last Password</InputLabel>
                    <Input
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth className="mt-1">
                    <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
                    <Input
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth className="mt-1">
                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                    <Input
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button className="bg-theme color-white mt-1" fullWidth> Change </Button>
            </Box>
        </Container>
    );
}

// export default function SetDistance() {

//     return (
//         <Container className="mt-4 mb-1">
//             <Box className="pb-1">
//                 <Typography className="text-align-center font-weight-bold" variant="h5"> CHANGE PASSWORD </Typography>
//             </Box>
//             <Box className="theme-border theme-box-shadow theme-border-radius p-2">
//                 <Box className="mt-1">
//                     <TextField label="Last password" variant="outlined" fullWidth />
//                 </Box>
//                 <Box className="mt-1">
//                     <TextField label="New password" variant="outlined" fullWidth />
//                 </Box>
//                 <Box className="mt-1">
//                     <TextField label="Confirm password" variant="outlined" fullWidth />
//                 </Box>
//                 <Button className="bg-theme color-white mt-1" fullWidth> Change </Button>
//             </Box>
//         </Container>
//     )
// }