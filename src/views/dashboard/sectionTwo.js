import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Root } from "../../pre/config"

export default function SelectionOne() {
    return (
        <Container id="section-two" >
            <Box className="d-flex justify-content-center align-items-center">
                <Grid container spacing={3} className="mt-3 pt-3 pb-3 align-items-center">
                    <Grid item md={7} xs={12} className="theme-border theme-border-radius">
                        <Typography variant="h5" className="font-weight-bold mt-1">Benefits For Workers</Typography>
                        <Typography className="mt-1">Are you tired of being treated like a number by agencies which collect much and pay you little ?</Typography>
                        <Typography>Then, Sign Up with CareShifts.</Typography>
                        <Typography className="mt-1 fs-1">• Free and easy Sign Up.</Typography>
                        <Typography className="fs-1">• Very easy to use platform.</Typography>
                        <Typography className="fs-1">• You decide your hourly pay rate.</Typography>
                        <Typography className="fs-1">• You receive 100% of what the client pays you.</Typography>
                        <Typography className="fs-1">• Your payment is processed immediately you clock  out. Intant pay is also available.</Typography>
                        <Typography className="fs-1">• You are treated as a human being with respect and dignity.</Typography>
                        <Typography className="fs-1">• Any shift you accept is automaticaly yours without any human interference.</Typography>
                        <Typography className="fs-1">• Excellent and friendly customer service.</Typography>
                    </Grid>
                    <Grid item md={5} xs={12} className="d-flex justify-content-center align-items-center mt-1">
                        <img className="crusor-pointer app-img" src={Root.adminUrl + "app/appstore.png"} alt="" />
                        <img className="crusor-pointer app-img" src={Root.adminUrl + "app/googlestore.png"} alt="" />
                        <img className="crusor-pointer qr-img" src={Root.adminUrl + "app/qrcode.png"} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}



