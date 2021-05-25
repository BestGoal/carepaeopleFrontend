import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
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

export default function Job() {

    const [mode, setMode] = React.useState(true)
    const data = [
        {
            shiftName: "UHN-TORONTO WESTERN-ON",
            avatar: "avatar/1.jpg"
        },
        {
            shiftName: "Winner's LifeCare center brantford-on",
            avatar: "avatar/2.jpg"
        },
        {
            shiftName: "Denis's LifeCare center brantford-on",
            avatar: "avatar/3.jpg"
        }
    ]

    return (
        <Container className="mt-3 worker-dashboard">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">AVAILABLE SHIFTS</Typography>
            </Box>
            <Grid container spacing={2} className="mt-2">
                <Grid item md={6} xs={12}>
                    <TextField fullWidth variant="outlined" label="Search by company name" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box className="worker-select-type">
                        <Button className={mode ? "enable-item" : ""} onClick={() => setMode(true)}> SORT BY DISTANCE </Button>
                        <Button className={!mode ? "enable-item" : ''} onClick={() => setMode(false)}> SORT BY DATES </Button>
                    </Box>
                </Grid>
            </Grid>
            {
                data.map((item, key) => (
                    <Box className="job-item mt-1 theme-border theme-box-shadow" key={key}>
                        <Box className="p-2">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="text-align-center" variant="h5"> {item.shiftName} </Typography>
                                    <Typography className="text-align-center"> Personal Care Aide ( PCA ) </Typography>
                                </Grid>
                                <Grid item md={3} xs={12} className="d-flex justify-content-center theme-border-radius">
                                    <img src={Root.adminUrl + item.avatar} alt="" />
                                </Grid>
                                <Grid item md={9} xs={12}>
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
                            <Box className="p-1 height-100 text-align-center" style={{ background: "#eee" }}>
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

                        <Box className="pt-0">
                            <ShiftNote />
                        </Box>

                        <Box className="d-flex justify-content-center">
                            <Button variant="contained" className="accept">Accept Shift</Button>
                        </Box>
                    </Box>
                ))
            }
            <Box className="d-flex justify-content-center mt-2">
                <Button variant="contained" style={{width: "100%"}}>Load More</Button>
            </Box>
        </Container>
    )
}