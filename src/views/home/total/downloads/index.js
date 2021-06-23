import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import { Root } from "../../../../pre/config"

export default function Downloads() {

    return (
        <Container className="container downloads">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> Downloads </Typography>
            </Box>
            <Grid container className="p-2 theme-border theme-box-shadow theme-border-radius d-flex justify-content-center">
                <Grid item md={6} sm={12} className="d-flex align-items-center justify-content-center">
                    <Typography className="text-align-center" variant="h6">Download careshifts app now!</Typography>
                </Grid>
                <Grid item md={6} sm={12} className="d-flex justify-content-center align-items-center ml-2">
                    <img className="crusor-pointer register-app-img" src={Root.adminUrl + "app/appstore.png"} alt="" />
                    <img className="ml-1 crusor-pointer register-app-img" src={Root.adminUrl + "app/googlestore.png"} alt="" />
                    <img className="ml-1 crusor-pointer register-app-img-qr" src={Root.adminUrl + "app/qrcode.png"} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}