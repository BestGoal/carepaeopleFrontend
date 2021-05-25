import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"

import LocationOn from "@material-ui/icons/LocationOn"
import PhoneAndroid from "@material-ui/icons/PhoneAndroid"
import Email from "@material-ui/icons/Email"
import Drafts from "@material-ui/icons/Drafts"
import Edit from "@material-ui/icons/Edit"

export default function Profile() {
    return (
        <Container className="mt-1">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box className="pb-1">
                        <Typography className="text-align-center font-weight-bold" variant="h5"> CONTACT </Typography>
                    </Box>
                    <Box>
                        <Box className="d-flex">
                            <Box> <LocationOn /> </Box>
                            <Box className="ml-1">
                                <Typography>Home: 20 Park Ave, Etobicock, Toronto, ON M8W 2G4, Canada</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                        <Box className="d-flex">
                            <Box> <PhoneAndroid /> </Box>
                            <Box className="ml-1">
                                <Typography> Phone: +1 647 895 6543</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                        <Box className="d-flex">
                            <Box> <Email /> </Box>
                            <Box className="ml-1">
                                <Typography>Email: udembainno@gmail.com</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                        <Box className="d-flex">
                            <Box> <Drafts /> </Box>
                            <Box className="ml-1">
                                <Typography> Mailing: 20 Park Ave, Etobicock, Toronto, ON M8W 2G4, Canada</Typography>                                
                            </Box>
                            <Box className="ml-1"> <Edit /> </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}