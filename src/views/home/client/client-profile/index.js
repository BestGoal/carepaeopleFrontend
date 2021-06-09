import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import LocationOn from "@material-ui/icons/LocationOn"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import { Root } from "../../../../pre/config"

export default function Profile() {
    return (
        <Container className="mt-1 client-home">
            <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Box className="d-flex justify-content-center avatar">
                                <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                                <PhotoCamera className="crusor-pointer" style={{position: "absolute", right: "16px", bottom: "16px"}} />
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Box className="p-2">
                                <Box className="d-flex align-items-center">
                                    <Typography variant="h4"> CAREHOLD </Typography>
                                </Box>
                                <Box className="d-flex mt-2">
                                    <LocationOn />
                                    <Typography> 399 Bathurst St, Toronto, ON M5T 2S8, Canada  </Typography>
                                </Box>
                                <Grid container spacing={3} className="mt-2">
                                    <Grid item xs={6} className="d-flex">
                                        <Typography className="font-weight-bold">Phone No: </Typography>
                                        <Typography className="ml-1">1234567890</Typography>
                                    </Grid>
                                    <Grid item xs={6} className="d-flex">
                                        <Typography className="font-weight-bold">Email: </Typography>
                                        <Typography className="ml-1">admin@carepeopl.ca</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}