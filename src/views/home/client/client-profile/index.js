import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Root } from "../../../../pre/config"

export default function ClientProfile() {
    return (
        <Container className="client-home mt-4 mb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> EDIT COMPANY PROFILE </Typography>
            <Box className="p-2 mt-1 theme-border theme-box-shadow theme-border-radius client-profile">
                <Box className="d-flex justify-content-center">
                    <img className="avatar crusor-pointer" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                </Box>
                <Box className="mt-1">
                    <TextField fullWidth variant="outlined" label="User Name" value="CAREHOLD" />
                </Box>
                <Box className="mt-1">
                    <TextField fullWidth variant="outlined" label="Email" value="imogenemartin81@gmail.com" />
                </Box>
                <Box className="mt-1">
                    <TextField fullWidth variant="outlined" label="Phone Number" value="12038923887" />
                </Box>
                <Box className="mt-1">
                    <TextField fullWidth variant="outlined" label="Address" value="23 Etobicoke Creek Trail, Mississauga, ON L4W 5N3, Canada" />
                </Box>
                <Box className="mt-1">
                    <TextField fullWidth variant="outlined" label="Company Description" multiline rows={5} />
                </Box>
                <Box className="mt-1">
                    <Button className="bg-theme color-white" fullWidth>Accept</Button>
                </Box>
            </Box>
        </Container>
    )
}