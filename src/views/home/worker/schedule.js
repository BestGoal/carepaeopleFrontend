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
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt"
import { Root } from "../../../pre/config"

export default function Schedule() {

    return (
        <Container className="mt-1 worker-dashboard">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box>
                        <Typography variant="h5">Curreent schedule</Typography>
                    </Box>
                    <Box className="job-item theme-box-shadow p-2 mt-1">
                        <Grid container spacing={2}>
                            <Grid item md={3} xs={12}>
                                <img src={Root.adminUrl + "avatar/ceo.jpg"} alt="" />
                            </Grid>
                            <Grid item md={9} xs={12}>
                                <Typography className="font-weight-bold text-align-center" variant="h5"> UHN-TORONTO WESTERN-ON </Typography>
                                <Typography className="font-weight-bold text-align-center"> personal care aide(PCA) </Typography>
                                <Grid container className="mt-2">
                                    <Grid item md={6} xs={12} className="theme-box-shadow">
                                        <Box className="p-1">
                                            <Box className="d-flex align-items-center">
                                                <DateRange />
                                                <Typography> Mon. May 90, 2021 </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <Timer />
                                                <Typography> Time: 7:30 AM - 7:30 PM (12hrs) </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <AvTimer />
                                                <Typography> Unpaid Break: 30minutes </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <Payment />
                                                <Typography> Pay: $248.55 @ $22/hr </Typography>
                                            </Box>
                                            <Box className="d-flex align-items-center">
                                                <SkipPrevious />
                                                <Typography> Instant pay: Available </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={6} xs={12} className="theme-box-shadow p-1">
                                        <Box className="p-1">
                                            <Box className="d-flex">
                                                <Typography className="font-weight-bold text-align-center"> 610 University Ave </Typography>
                                            </Box>
                                            <Box className="d-flex">
                                                <LocationOn />
                                                <Typography className="font-weight-bold text-align-center"> Tronto, On M6V 5k8 Canada </Typography>
                                            </Box>
                                            <Box className="d-flex">
                                                <ArrowRightAlt />
                                                <Typography className="font-weight-bold text-align-center"> 13.61 km </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} className="mt-1 d-flex justify-content-center">
                                        <Button variant="contained" className="">Decline Shift</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}