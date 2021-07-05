import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
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
import Warning from "@material-ui/icons/Warning"
import ShiftNote from "../../../worker/worker-home/available/ShiftNote"
import { Root } from "../../../../../pre/config"
import { getShiftDirect } from "../../../../../redux/action/client/shifts/index"
import { locationData, breakData, transitData, dutyData } from "../../../../../configs/index"

export default function ClientShiftsPosts() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData)
    const [data, setData] = useState([])


    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        let rdata = await getShiftDirect(dispatch)
        setData(rdata)
        console.log(rdata)
    }

    return (
        <Container className="container pt-2 mb-1 worker-home p-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">POSTED DIRECT SHIFTS</Typography>
            </Box>
            {
                data.map((item, key) => (
                    <Box className="worker-job mt-1 theme-border theme-box-shadow" key={key}>
                        <Box className="p-2">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="text-align-center" variant="h5"> {`${userData.firstName} ${userData.lastName}`} </Typography>
                                    <Typography className="text-align-center">
                                        {`${locationData.filter(it => it.value === item.job_position)[0].title} (${dutyData.filter(it=>it.value===item.duty)[0].title})`}
                                    </Typography>
                                </Grid>
                                <Grid item sm={4} xs={12} className="d-flex justify-content-center theme-border-radius">
                                    <img src={Root.adminUrl + userData.avatar} alt="" />
                                </Grid>
                                <Grid item sm={8} xs={12}>
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
                                                    <Typography className="ml-1">{`Unpaid Break: ${breakData.filter(it=>it.value===item.unpaid_break)[0].title}`}</Typography>
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
                        <Box className="p-1 d-flex justify-content-center bg-eee">
                            <LocationOn />
                            <Typography className="ml-1">{`${item.address[0]}`}</Typography>
                        </Box>
                        <ShiftNote data={item.note} />
                        <Box className="d-flex">
                            <Button fullWidth variant="contained" className="accept bg-theme color-white border-radius-0">EDIT</Button>
                            <Button fullWidth variant="contained" className="accept border-radius-0">Cancel</Button>
                        </Box>
                    </Box>
                ))
            }
            <Box className="d-flex justify-content-center mt-2">
                <Button variant="contained" fullWidth>Load More</Button>
            </Box>
        </Container>
    )
}