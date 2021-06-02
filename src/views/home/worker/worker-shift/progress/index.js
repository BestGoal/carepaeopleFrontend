import React from "react"
import Container from "@material-ui/core/Container"
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
import ShiftNote from "../../worker-home/job/ShiftNote"
import { Root } from "../../../../../pre/config"

export default function WorkerJobHistory() {

    const data = [
        {
            shiftName: "UHN-TORONTO WESTERN-ON",
            avatar: "avatar/1.jpg"
        }
    ]

    return (
        <Container className="mt-3 mb-1 worker-home">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">SHIFTS INPROGRESS</Typography>
            </Box>
            {
                data.map((item, key) => (
                    <Box className="worker-job mt-1 theme-border theme-box-shadow" key={key}>
                        <Box className="p-2">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="text-align-center" variant="h5"> {item.shiftName} </Typography>
                                    <Typography className="text-align-center"> Personal Care Aide ( PCA ) </Typography>
                                </Grid>
                                <Grid item md={4} xs={12} className="d-flex justify-content-center theme-border-radius">
                                    <img src={Root.adminUrl + item.avatar} alt="" />
                                </Grid>
                                <Grid item md={8} xs={12}>
                                    <Grid container spacing={3}>
                                        <Grid item md={6} xs={12}>
                                            <Box className="p-1 height-100">
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
                                                <Box className="d-flex align-items-center">
                                                    <Warning />
                                                    <Typography className="ml-1">Covid-19 Negative</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="pb-0 mt-1">
                            <Box className="p-1 height-100 text-align-center bg-eee">
                                <Box className="d-flex justify-content-center">
                                    <LocationOn />
                                    <Typography className="ml-1"> 399 Bathurst St, Toronto, ON M5T 2S8, Canada  </Typography>
                                </Box>
                                <Box className="d-flex justify-content-center">
                                    <Explore />
                                    <Typography className="ml-1">Distance: 13.61 km </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <ShiftNote />
                        <Box className="d-flex">
                            <Button variant="contained" fullWidth className="bg-theme color-white m-1">Time Tracking</Button>
                            <Button variant="contained" fullWidth className="m-1">CLOCK OUT</Button>
                        </Box>
                    </Box>
                ))
            }
        </Container>
    )
}