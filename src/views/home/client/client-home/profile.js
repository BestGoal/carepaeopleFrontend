import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import WatchLater from "@material-ui/icons/WatchLater"
import Group from "@material-ui/icons/Group"
import LocationOn from "@material-ui/icons/LocationOn"
import { Root } from "../../../../pre/config"

export default function WorkerProfile() {
    return (
        <Container className="p-2 theme-border theme-box-shadow theme-border-radius client-profile">
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <Box className="d-flex justify-content-center">
                        <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                    </Box>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Box className=" p-2">
                        <Box className="d-flex align-items-center">
                            <Typography variant="h4"> Denis postnykhdo </Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-2">
                            <LocationOn />
                            <Typography className="font-weight-bold"> 23 Etobicoke Creek Trail, Mississauga, ON L4W 5N3, Canada </Typography>
                        </Box>
                        <Box className="d-flex mt-2">
                            <Box className="d-flex align-items-center">
                                <WatchLater />
                                <Typography className="font-weight-bold"> HOURS PURCHASED: </Typography>
                                <Typography className="ml-1"> 0:00 </Typography>
                            </Box>
                            <Box className="d-flex align-items-center ml-3">
                                <Group />
                                <Typography className="font-weight-bold"> Hired count: </Typography>
                                <Typography className="ml-1"> 0 </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}