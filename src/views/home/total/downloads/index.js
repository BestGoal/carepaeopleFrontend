import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import { Root } from "../../../../pre/config"

export default function Faq() {

    return (
        <Container className="mt-4 mb-1 faq-page">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> Downloads </Typography>
            </Box>
            <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                <CardContent>
                    <Typography className="text-align-center" variant="h6">Please download  CARESHIFTS App from Google playstore or App Store and Sign Up</Typography>
                    <Box className="d-flex justify-content-center align-items-center mt-1">
                        <img className="crusor-pointer register-app-img" src={Root.adminUrl + "app/appstore.png"} alt="" />
                        <img className="crusor-pointer register-app-img" src={Root.adminUrl + "app/googlestore.png"} alt="" />
                        <img className="crusor-pointer register-app-img-qr" src={Root.adminUrl + "app/qrcode.png"} alt="" />
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}