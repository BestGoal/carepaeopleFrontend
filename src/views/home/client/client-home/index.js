import React from "react"
import { useSelector } from "react-redux"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import WatchLater from "@material-ui/icons/WatchLater"
import Group from "@material-ui/icons/Group"
import LocationOn from "@material-ui/icons/LocationOn"
import ProgressShifts from "../client-shift/progress/index"
import ScheduleShifts from "../client-shift/schedule/index"
import PostedShifts from "../client-shift/posted/index"
import { Root } from "../../../../pre/config"

export default function ClientHome() {

    const userData = useSelector(state => state.auth.userData)

    return (
        <>
            <Container className="client-home container pt-2">
                <Grid container spacing={2} className="client-profile theme-border theme-box-shadow theme-border-radius p-2">
                    <Grid item md={4} xs={12}>
                        <Box className="d-flex justify-content-center">
                            <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                        </Box>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Box className="p-1 theme-border">
                            <Box className="d-flex align-items-center">
                                <Typography variant="h4">{`${userData.firstName} ${userData.lastName}`}</Typography>
                            </Box>
                            <Box className="d-flex align-items-center mt-2">
                                <LocationOn />
                                <Typography>
                                    {`${userData.streetNumber} ${userData.streetName} ${userData.city} ${userData.province} 
                                        ${userData.zipcode} ${userData.country}`}
                                </Typography>
                            </Box>
                            <Grid container className="d-flex">
                                <Grid item md={6} xs={12} className="d-flex mt-1">
                                    <WatchLater />
                                    <Typography> Hours Purchased&nbsp;:&nbsp;</Typography>
                                    <Typography> 0:00 </Typography>
                                </Grid>
                                <Grid item md={6} xs={12} className="d-flex mt-1">
                                    <Group />
                                    <Typography> Hired Counts&nbsp;:&nbsp; </Typography>
                                    <Typography> 0 </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <ProgressShifts />
            <ScheduleShifts />
            <PostedShifts />
        </>
    )
}