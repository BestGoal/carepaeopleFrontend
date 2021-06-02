import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function SetDistance() {

    return (
        <Container className="mt-4 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> CHANGE PASSWORD </Typography>
            </Box>
            <Box className="theme-border theme-box-shadow theme-border-radius p-3">
                <Box className="mt-1">
                    <TextField label="Last password" variant="outlined" fullWidth />
                </Box>
                <Box className="mt-1">
                    <TextField label="New password" variant="outlined" fullWidth />
                </Box>
                <Box className="mt-1">
                    <TextField label="Confirm password" variant="outlined" fullWidth />
                </Box>
                <Button className="bg-theme color-white mt-1" fullWidth> Change </Button>
            </Box>
        </Container>
    )
}