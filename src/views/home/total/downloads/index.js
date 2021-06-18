import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import { Root } from "../../../../pre/config"

export default function Downloads() {

    return (
        <Container className="mt-4 mb-1 downloads">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> Downloads </Typography>
            </Box>
            <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                <CardContent className="d-flex justify-content-center align-items-center">
                    <Typography className="text-align-center" variant="h6">Download careshifts app now!</Typography>
                    <Box className="d-flex justify-content-center align-items-center ml-2">
                        <img className="crusor-pointer register-app-img" src={Root.adminUrl + "app/appstore.png"} alt="" />
                        <img className="ml-1 crusor-pointer register-app-img" src={Root.adminUrl + "app/googlestore.png"} alt="" />
                        <img className="ml-1 crusor-pointer register-app-img-qr" src={Root.adminUrl + "app/qrcode.png"} alt="" />
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}