import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown"
import { Root } from "../../pre/config"

export default function SelectionOne() {
    return (
        <Box className="selection-tone">
            <Container className="s-container">
                <Box className="d-flex justify-content-center align-items-center selection-one">
                    <Grid container spacing={3}>
                        <Grid item md={5} xs={12} className="dash-img-t">
                            <img className="dash-img" alt="" src={Root.adminUrl + "img/1.jpg"} />
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <Typography className="font-weight-bold first-letter">THE BEST ON-DEMAND HEALTHCARE SHIFTS POSTING PLATFORM</Typography>
                            <Typography className="fs-1 font-weight-bold">Get Instant Access To Over 10,000 Fully Vetted Skilled Healthcare Workers When You Are In Need!</Typography>
                            <ul className="theme-border theme-border-radius pt-1">
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
                        <Box className="section-arrow-t">
                            <a href="#section-two" className="section-arrow">
                                <KeyboardArrowDown className="crusor-pointer arrow-bottom" />
                            </a>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}



