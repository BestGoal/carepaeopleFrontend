import React, { useState } from "react"
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import LocationOn from "@material-ui/icons/LocationOn"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { Root } from "../../../../pre/config"

export default function Profile() {

    const [mode, setmode] = useState(false)
    const userData = useSelector(state => state.auth.userData)

    console.log(userData)

    return (
        <Container className="client-home container pt-2">
            {
                !mode ?
                    <>
                        <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item md={4} xs={12}>
                                        <Box className="d-flex justify-content-center avatar">
                                            <img className="avatar" src={Root.adminUrl + userData.avatar} alt="" />
                                        </Box>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <Box className="p-2 theme-border">
                                            <Box className="d-flex align-items-center">
                                                <Typography variant="h4">{`${userData.firstName} ${userData.lastName}`}</Typography>
                                            </Box>
                                            <Box className="d-flex mt-2">
                                                <LocationOn />
                                                <Typography>
                                                    {
                                                        `${userData.zipcode} ${userData.streetNumber} ${userData.streetName} 
                                                         ${userData.province} ${userData.country}`
                                                    }
                                                </Typography>
                                            </Box>
                                            <Grid container spacing={3} className="mt-2">
                                                <Grid item xs={6} className="d-flex">
                                                    <Typography className="font-weight-bold">Phone No: </Typography>
                                                    <Typography className="ml-1">{userData.phoneNumber}</Typography>
                                                </Grid>
                                                <Grid item xs={6} className="d-flex">
                                                    <Typography className="font-weight-bold">Email: </Typography>
                                                    <Typography className="ml-1">{userData.email}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Box className="p-2 mt-1 theme-border theme-box-shadow client-profile">
                            <Box className="d-flex">
                                <Typography className="font-weight-bold">Company Description: </Typography>
                                <Typography className="ml-1">
                                    {userData.companyDescription}
                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="p-2 mt-1 theme-border theme-box-shadow client-profile">
                            <Box className="d-flex">
                                <Typography className="font-weight-bold">Site Notes: </Typography>
                                <Typography className="ml-1">
                                    {userData.siteNotes}
                                </Typography>
                            </Box>
                        </Box>
                        <Button className="bg-theme color-white mt-1" fullWidth onClick={() => setmode(true)}>Edit</Button>
                    </>
                    :
                    <>
                        <Box className="theme-border theme-box-shadow p-2">
                            <Box className="client-profile d-flex justify-content-center">
                                <Box className="avatar crusor-pointer">
                                    <img className="avatar" src={Root.adminUrl + userData.avatar} alt="" />
                                    <PhotoCamera className="camera" />
                                </Box>
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="firstName" value={`${userData.firstName}`} />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="lastName" value={`${userData.lastName}`} />
                            </Box>
                            <Box className="mt-1">
                                <TextField fullWidth variant="outlined" label="Address" value={"userData"} />
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