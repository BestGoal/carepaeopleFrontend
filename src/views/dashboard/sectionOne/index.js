import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown"
import { Root } from "../../../pre/config"

export default function SelectionOne() {
    return (
        <Container className="p-3">
            <Grid container spacing={3} className="mt-2 pt-3 pb-3">
                <Grid item md={5} xs={12}>
                    <img style={{ width: "100%", height: "100%" }} src={Root.adminUrl + "img/1.jpg"} />
                </Grid>
                <Grid item md={7} mxs={12}>
                    <Typography variant="h4" className="font-weight-bold">THE BEST ON-DEMAND HEALTHCARE SHIFTS POSTING PLATFORM</Typography>
                    <Typography className="fs-1 font-weight-bold">Get Instant Access To Over 10,000 Fully Vetted Skilled Healthcare Workers When You Are In Need!</Typography>
                    <ul className="mt-1 theme-border theme-border-radius pt-1">
                        <li><Typography className="fs-1 font-weight-bold">Benefits For Comapanies</Typography></li>
                        <li><Typography className="fs-1">Fill your open shifts with skilled healthcare workers in less than 5 minutes.</Typography></li>
                        <li><Typography className="fs-1">You pay less with just 20% admin fee, whereas agencies will rip you off with ridiculous markups.</Typography></li>
                        <li><Typography className="fs-1">Free and easy Sign Up.</Typography></li>
                        <li><Typography className="fs-1">No monthly or recurring fees, No hidden fees.</Typography></li>
                        <li><Typography className="fs-1">Very easy to use platform.</Typography></li>
                        <li><Typography className="fs-1">Healthcare workers on our platform are fully and continuously vetted before and after onboarding to maintain high standards.</Typography></li>
                        <li><Typography className="fs-1">Excellent and friendly customer service.</Typography></li>
                    </ul>
                </Grid>
                <Grid item xs={12} className="d-flex justify-content-center mt-3">
                    <KeyboardArrowDown className="crusor-pointer" style={{ width: "50px", height: "50px" }} />
                </Grid>
            </Grid>
            <Grid container spacing={3} className="mt-3 pt-3 pb-3 align-items-center">
                <Grid item xs={7} className="theme-border theme-border-radius">
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
                    <img className="crusor-pointer" style={{ width: "150px" }} src={Root.adminUrl + "app/appstore.png"} alt="" />
                    <img className="crusor-pointer ml-1" style={{ width: "150px" }} src={Root.adminUrl + "app/googlestore.png"} alt="" />
                    <img className="crusor-pointer ml-1" style={{ width: "100px" }} src={Root.adminUrl + "app/qrcode.png"} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}



