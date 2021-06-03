import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import WatchLater from "@material-ui/icons/WatchLater"
import Group from "@material-ui/icons/Group"
import LocationOn from "@material-ui/icons/LocationOn"
import { Root } from "../../../../pre/config"

export default function ClientHome() {
    return (
        <Container className="client-home p-1">
            <Grid container spacing={2} className="client-profile theme-border theme-box-shadow theme-border-radius p-2 mt-2">
                <Grid item md={4} xs={12}>
                    <Box className="d-flex justify-content-center">
                        <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                    </Box>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Box className="m-1">
                        <Box className="d-flex align-items-center">
                            <Typography variant="h4"> Denis postnykhdo </Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-2">
                            <LocationOn />
                            <Typography> 23 Etobicoke Creek Trail, Mississauga, ON L4W 5N3, Canada </Typography>
                        </Box>
                        <Grid container className="d-flex">
                            <Grid item md={6} xs={12} className="d-flex mt-1">
                                <WatchLater />
                                <Typography> HOURS PURCHASED&nbsp;:&nbsp;</Typography>
                                <Typography> 0:00 </Typography>
                            </Grid>
                            <Grid item md={6} xs={12} className="d-flex mt-1">
                                <Group />
                                <Typography> Hired count&nbsp;:&nbsp; </Typography>
                                <Typography> 0 </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}