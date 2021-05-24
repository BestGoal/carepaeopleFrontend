import React from "react"
import Container from "@material-ui/core/Container"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

import DateRange from "@material-ui/icons/DateRange"
import Timer from "@material-ui/icons/Timer"
import AvTimer from "@material-ui/icons/AvTimer"
import Payment from "@material-ui/icons/Payment"
import SkipPrevious from "@material-ui/icons/SkipPrevious"
import LocationOn from "@material-ui/icons/LocationOn"
import Explore from "@material-ui/icons/Explore"
import Warning from "@material-ui/icons/Warning"

import ShiftNote from "./job/ShiftNote"
import { Root } from "../../../pre/config"

export default function Schedule() {

    return (
        <Container className="mt-4 worker-dashboard">
            <Box>
                <Typography className="text-align-center font-weight-bold" variant="h5">CURRENT SCHEDULE</Typography>
            </Box>
            <Card className="p-2 theme-border theme-box-shadow mt-2">
                <CardContent>
                    <Box className="job-item p-2 mt-1">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className="text-align-center" variant="h5"> UHN-TORONTO WESTERN-ON </Typography>
                                <Typography className="text-align-center"> personal care aide(PCA) </Typography>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <img src={Root.adminUrl + "avatar/1.jpg"} alt="" />
                            </Grid>
                            <Grid item md={9} xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <Box className="border1 p-1 height-100">
                                            <Box className="d-flex align-items-center">
                                                <DateRange />
                                                <Typography className="ml-1"> Mon. May 10, 2021 </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <Timer />
                                                <Typography className="ml-1"> Time: 7:30 AM - 7:30 PM (12hrs) </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <AvTimer />
                                                <Typography className="ml-1"> Unpaid Break: 30minutes </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <Payment />
                                                <Typography className="ml-1"> Pay: $248.55 @ $22/hr </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <SkipPrevious />
                                                <Typography className="ml-1"> Instant pay: Available </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Box className="border1 p-1 height-100">
                                            <Box className="d-flex">
                                                <LocationOn />
                                                <Typography className="ml-1"> 610 University Ave Tronto, On M6V 5k8 Canada </Typography>
                                            </Box>
                                            <Box className="d-flex">
                                                <Explore />
                                                <Typography className="ml-1">Distance: 13.61 km </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ShiftNote />
                                        <Box className="d-flex mt-1">
                                            <Warning />
                                            <Typography className="ml-1">Covid-19 Negative</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="d-flex justify-content-center">
                                <Button variant="contained" className="accept">Cancel Shift</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}