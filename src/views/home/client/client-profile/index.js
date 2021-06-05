import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import LocationOn from "@material-ui/icons/LocationOn"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import { Root } from "../../../../pre/config"

export default function ClientProfile() {

    const [mode, setmode] = React.useState(false)

    return (
        <Container className="client-home mt-4 mb-1">
            {
                !mode ?
                    <>
                        <Typography variant="h5" className="text-align-center font-weight-bold"> BUSINESS PROFILE </Typography>
                        <Box className="p-2 mt-1 theme-border theme-box-shadow client-profile theme-border-radius">
                            <Box>
                                <Box className="d-flex justify-content-center">
                                    <img className="crusor-pointer" src={Root.adminUrl + "avatar/avatar.webp"} alt="" style={{ width: "100px" }} />
                                </Box>
                                <Typography className="text-align-center font-weight-bold mt-1" variant="h5">CAREHOLD</Typography>
                                <Box className="d-flex justify-content-center">
                                    <LocationOn />
                                    <Typography> 399 Bathurst St, Toronto, ON M5T 2S8, Canada  </Typography>
                                </Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} className="d-flex justify-content-end">
                                        <Typography className="font-weight-bold">Phone No: </Typography>
                                        <Typography className="ml-1">1234567890</Typography>
                                    </Grid>
                                    <Grid item xs={6} className="d-flex">
                                        <Typography className="font-weight-bold">Email: </Typography>
                                        <Typography className="ml-1">admin@carepeopl.ca</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box className="p-2 mt-1 theme-border theme-box-shadow client-profile">
                            <Box className="d-flex">
                                <Typography className="font-weight-bold">Company Description: </Typography>
                                <Typography className="ml-1"></Typography>
                            </Box>
                        </Box>
                        <Box className="p-2 mt-1 theme-border theme-box-shadow client-profile">
                            <Box className="d-flex">
                                <Typography className="font-weight-bold">Site Notes: </Typography>
                                <Typography className="ml-1"></Typography>
                            </Box>
                        </Box>
                        <Button className="bg-theme color-white mt-1" fullWidth onClick={() => setmode(true)}>Edit</Button>
                    </>
                    :
                    <>
                        <Box className="theme-border theme-box-shadow p-2">
                            <Box className="client-profile d-flex justify-content-center">
                                <Box className="avatar crusor-pointer">
                                    <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                                    <PhotoCamera style={{position: "absolute", right: "16px", bottom: "16px"}} />
                                </Box>
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="User Name" value="CAREHOLD" />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="Address" value="23 Etobicoke Creek Trail, Mississauga, ON L4W 5N3, Canada" />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="Email" value="imogenemartin81@gmail.com" />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="Phone Number" value="12038923887" />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="Company Description" multiline rows={5} />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="Site Notes" multiline rows={5} />
                            </Box>
                            <Box className="mt-1">
                                <Button className="bg-theme color-white" fullWidth onClick={() => setmode(false)}>Save</Button>
                            </Box>
                        </Box>
                    </>
            }
        </Container>
    )
}