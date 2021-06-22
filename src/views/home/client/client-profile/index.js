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
import Modal from 'react-modal';
import { Root } from "../../../../pre/config"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Profile() {

    const [mode, setmode] = useState(false)
    const userData = useSelector(state => state.auth.userData)

    return (
        <Container className="client-home container">
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
                                                    {`${userData.streetNumber} ${userData.streetName} ${userData.city} ${userData.province} ${userData.zipcode} ${userData.country}`}
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
                        <Box spacing={3} className="theme-border theme-box-shadow p-2">
                            <Grid container spacing={3}>
                                <Grid item xs={12} className="d-flex justify-content-center">
                                    <Grid className="avatar crusor-pointer">
                                        <img className="avatar" src={Root.adminUrl + userData.avatar} alt="" />
                                        <PhotoCamera className="camera" />
                                    </Grid>
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="firstName" value={`${userData.firstName}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="lastName" value={`${userData.lastName}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="streetNumber" value={`${userData.streetNumber}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="streetName" value={`${userData.streetName}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="city" value={`${userData.city}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="province" value={`${userData.province}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="zipcode" value={`${userData.zipcode}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="country" value={`${userData.country}`} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Email" value={userData.email} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Phone Number" value={userData.phoneNumber} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Company Description" multiline rows={5} value={userData.companyDescription} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Site Notes" multiline rows={5} value={userData.siteNotes} />
                                </Grid>
                                <Grid xs={12} item className="d-flex justify-content-between">
                                    <Button fullWidth className="bg-theme color-white" onClick={() => setmode(false)}>Save</Button>
                                    <Button fullWidth className="ml-1" variant="contained" onClick={() => setmode(false)}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Modal
                            isOpen={true}
                            onRequestClose={() => console.log()}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <img className="img-modal-t" src={Root.adminUrl + userData.avatar} alt="" />
                        </Modal>
                    </>
            }
        </Container>
    )
}