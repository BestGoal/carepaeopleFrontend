import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function ContactUs() {

    return (
        <Container className="mt-1 mb-1 contact-us">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> Contact Us </Typography>
            </Box>
            <Box className="theme-border p-2 theme-box-shadow theme-border-radius">
                <Typography className="font-weight-bold">CHOOSE SUBJECTS: </Typography>
                <Box className="d-flex">
                    <Typography className="bg-theme color-white p-1 crusor-pointer">Gitches, Bugs and App Issues</Typography>
                    <Typography className="ml-1 bg-theme color-white p-1 crusor-pointer">Payment or Invoice issues</Typography>
                    <Typography className="ml-1 bg-theme color-white p-1 crusor-pointer">Other issues / Feedback</Typography>
                </Box>
                <TextField className="mt-2" fullWidth variant="outlined" rows={5} multiline label="Message" />
                <Button variant="contained" className="conbtact-btn mt-2">Upload Photo</Button>
                <Button variant="contained" className="conbtact-btn bg-theme color-white">Send Email</Button>
            </Box>
        </Container>
    )
}