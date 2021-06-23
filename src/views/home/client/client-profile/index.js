import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
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
import { ProfileUpdate } from "../../../../redux/action/profile/profileRequest"
import { LoginAction } from "../../../../redux/action/auth/loginActions"
import { Root } from "../../../../pre/config"

export default function ClientProfile() {

    const dispatch = useDispatch();

    const userData = useSelector(state => state.auth.userData)
    const [mode, setmode] = useState(false)
    const [stateUserData, setStateUserData] = useState({})
    const [userAvatar, setUserAvatar] = useState(null)
    const [tempAvatar, setTempAvatar] = useState(null)

    useEffect(() => {
        setStateUserData(userData)
        setTempAvatar(Root.adminUrl + userData.avatar)
    }, [userData])

    const ChooseImage = (e) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setTempAvatar(fileReader.result);
            setUserAvatar(e.target.files[0]);
        }
        fileReader.readAsDataURL(e.target.files[0])
    }

    const userDataUpdate = (key, value) => {
        let tempUserData = Object.assign({}, stateUserData)
        tempUserData[key] = value
        setStateUserData(tempUserData);
    }

    const sendData = async () => {

        const validator = () => {
            if (!stateUserData.firstName) return "Please Input firstname correct";
            if (!stateUserData.lastName) return "Please Input lastname correct";
            if (!stateUserData.companyName) return "Please Input companyname correct";
            if (!stateUserData.companyWebsite) return "Please Input companywebsite correct";
            if (!stateUserData.streetNumber) return "Please Input streetNumber correct";
            if (!stateUserData.streetName) return "Please Input streetName correct";
            if (!stateUserData.city) return "Please Input city correct";
            if (!stateUserData.province) return "Please Input province correct";
            if (!stateUserData.country) return "Please Input country correct";
            if (!stateUserData.zipcode) return "Please Input zipcode correct";
            if (!stateUserData.email) return "Please Input email correct";
            if (!stateUserData.phoneNumber) return "Please Input phonenumber correct";
            if (!stateUserData.companyDescription) return "Please Input company description correct";
            return true;
        }

        const flag = validator();
        if(flag === true) {
            const fpdata = new FormData();
            if (userAvatar) {
                fpdata.append('avatar', userAvatar);
            }
            fpdata.append('id', stateUserData._id);
            let sendData = {
                firstName: stateUserData.firstName,
                lastName: stateUserData.lastName,
                streetNumber: stateUserData.streetNumber,
                streetName: stateUserData.streetName,
                city: stateUserData.city,
                province: stateUserData.province,
                zipcode: stateUserData.zipcode,
                country: stateUserData.country,
                email: stateUserData.email,
                phoneNumber: stateUserData.phoneNumber,
                companyDescription: stateUserData.companyDescription,
                siteNotes: stateUserData.siteNotes,
            }
            fpdata.append('data', JSON.stringify(sendData));
            let rdata = await ProfileUpdate(fpdata, dispatch);
            if(rdata) {
                dispatch(LoginAction(true, rdata))
            }
            setmode(false)
        } else {
            toast.error(flag)
        }
    }

    const cancelData = () => {
        setStateUserData(userData)
        setTempAvatar(Root.adminUrl + userData.avatar)
        setmode(false)
    }

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
                                            <img className="avatar" src={Root.adminUrl + stateUserData.avatar} alt="" />
                                        </Box>
                                    </Grid>
                                    <Grid item md={8} xs={12}>
                                        <Box className="p-2 theme-border">
                                            <Box className="d-flex align-items-center">
                                                <Typography variant="h4">{`${stateUserData.firstName} ${stateUserData.lastName}`}</Typography>
                                            </Box>
                                            <Box className="d-flex mt-2">
                                                <LocationOn />
                                                <Typography>
                                                    {`${stateUserData.streetNumber} ${stateUserData.streetName} ${stateUserData.city} ${stateUserData.province} ${stateUserData.zipcode} ${stateUserData.country}`}
                                                </Typography>
                                            </Box>
                                            <Grid container spacing={3} className="mt-2">
                                                <Grid item xs={6} className="d-flex">
                                                    <Typography className="font-weight-bold">Phone No: </Typography>
                                                    <Typography className="ml-1">{stateUserData.phoneNumber}</Typography>
                                                </Grid>
                                                <Grid item xs={6} className="d-flex">
                                                    <Typography className="font-weight-bold">Email: </Typography>
                                                    <Typography className="ml-1">{stateUserData.email}</Typography>
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
                                    {stateUserData.companyDescription}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="p-2 mt-1 theme-border theme-box-shadow client-profile">
                            <Box className="d-flex">
                                <Typography className="font-weight-bold">Site Notes: </Typography>
                                <Typography className="ml-1">
                                    {stateUserData.siteNotes}
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
                                        <img className="avatar" src={tempAvatar} alt="" onClick={()=>document.getElementById("file").click()} />
                                        <input id="file" type="file" style={{ display: "none" }} onChange={e => ChooseImage(e)} />
                                        <PhotoCamera className="camera" />
                                    </Grid>
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="firstName" value={`${stateUserData.firstName}`} onChange={(e)=>userDataUpdate("firstName", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="lastName" value={`${stateUserData.lastName}`} onChange={(e)=>userDataUpdate("lastName", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="streetNumber" value={`${stateUserData.streetNumber}`} onChange={(e)=>userDataUpdate("streetNumber", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="streetName" value={`${stateUserData.streetName}`} onChange={(e)=>userDataUpdate("streetName", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="city" value={`${stateUserData.city}`} onChange={(e)=>userDataUpdate("city", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="province" value={`${stateUserData.province}`} onChange={(e)=>userDataUpdate("province", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="zipcode" value={`${stateUserData.zipcode}`} onChange={(e)=>userDataUpdate("zipcode", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="country" value={`${stateUserData.country}`} onChange={(e)=>userDataUpdate("country", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Email" value={stateUserData.email} onChange={(e)=>userDataUpdate("email", e.currentTarget.value)} />
                                </Grid>
                                <Grid md={4} xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Phone Number" value={stateUserData.phoneNumber} onChange={(e)=>userDataUpdate("phoneNumber", e.currentTarget.value)} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Company Description" multiline rows={5} value={stateUserData.companyDescription} onChange={(e)=>userDataUpdate("companyDescription", e.currentTarget.value)} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField fullWidth variant="outlined" label="Site Notes" multiline rows={5} value={stateUserData.siteNotes} onChange={(e)=>userDataUpdate("siteNotes", e.currentTarget.value)} />
                                </Grid>
                                <Grid xs={12} item className="d-flex justify-content-between">
                                    <Button fullWidth className="bg-theme color-white" onClick={() => sendData()}>Save</Button>
                                    <Button fullWidth className="ml-1" variant="contained" onClick={() => cancelData()}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
            }
        </Container>
    )
}