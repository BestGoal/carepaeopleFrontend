import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import Chat from "@material-ui/icons/Chat"
import Email from "@material-ui/icons/Email"
import Phone from "@material-ui/icons/Phone"

export default function ContactUs() {

    return (
        <Container className="mt-4 mb-1 contact-us">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> CONTACT US </Typography>
            </Box>
            <Box className="theme-border p-2 theme-box-shadow theme-border-radius">
                <Grid container>
                    <Grid item md={4} className="p-1">
                        <Typography className="text-align-center bg-theme color-white p-1 crusor-pointer d-flex align-items-center justify-content-center">
                            <Chat className="mr-1" />
                            Chat With Us
                        </Typography>
                    </Grid>
                    <Grid item md={4} className="p-1">
                        <Typography className="text-align-center bg-theme color-white p-1 crusor-pointer d-flex align-items-center justify-content-center">
                            <Email className="mr-1" />
                            Email us: support @carepeople.ca
                        </Typography>
                    </Grid>
                    <Grid item md={4} className="p-1">
                        <Typography className="text-align-center bg-theme color-white p-1 crusor-pointer d-flex align-items-center justify-content-center">
                            <Phone className="mr-1" />
                            Call us: +1 647 803 91391
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}