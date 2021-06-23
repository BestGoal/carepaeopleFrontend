import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import LocationOn from "@material-ui/icons/LocationOn"
import PhoneAndroid from "@material-ui/icons/PhoneAndroid"
import Email from "@material-ui/icons/Email"
import Drafts from "@material-ui/icons/Drafts"
import School from "@material-ui/icons/School"
import Rotate90DegreesCcw from "@material-ui/icons/Rotate90DegreesCcw"
import Contactless from "@material-ui/icons/Contactless"
import DateRange from "@material-ui/icons/DateRange"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { Edit } from 'react-feather';
import Modal from 'react-modal';
import { ProfileUpdate } from "../../../../redux/action/profile/profileRequest"
import { LoginAction } from "../../../../redux/action/auth/loginActions"

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

    const [mode, setMode] = useState(false)
    const [data, setData] = useState({ key: "", value: "", type: "" })
    const userData = useSelector(state => state.auth.userData)
    const dispatch = useDispatch();

    const openModal = (key, type) => {
        setMode(true)
        let tempData = {
            key,
            type,
            value: userData[key]
        }
        setData(tempData)
    }

    const updateData = (value) => {
        let tempData = {
            key: data.key,
            type: data.type,
            value: value
        }
        setData(tempData)
    }

    const saveData = async () => {
        const fpdata = new FormData();
        let sendData = {}
        sendData[data.key] = data.value
        fpdata.append('id', userData._id);
        fpdata.append('data', JSON.stringify(sendData));
        let rdata = await ProfileUpdate(fpdata, dispatch);
        if (rdata) {
            dispatch(LoginAction(true, rdata))
            setMode(false)
        }
    }

    return (
        <>
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
                                    <Typography>
                                        {`${userData.streetNumber} ${userData.streetName} ${userData.city} ${userData.province} ${userData.zipcode} ${userData.country}`}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="d-flex">
                                <Box> <PhoneAndroid /> </Box>
                                <Box className="ml-1">
                                    <Typography> Phone: +{userData.phoneNumber}</Typography>
                                </Box>
                                <Box className="ml-1"><Edit className="crusor-pointer" onClick={() => openModal("phoneNumber", "number")} /></Box>
                            </Box>
                            <Box className="d-flex">
                                <Box> <Email /> </Box>
                                <Box className="ml-1">
                                    <Typography>Email: {userData.email}</Typography>
                                </Box>
                                <Box className="ml-1"><Edit className="crusor-pointer" onClick={() => openModal("email", "email")} /></Box>
                            </Box>
                            <Box className="d-flex">
                                <Box> <Drafts /> </Box>
                                <Box className="ml-1">
                                    <Typography> Mailing: {userData.mailing}</Typography>
                                </Box>
                                <Box className="ml-1"> <Edit className="crusor-pointer" onClick={() => openModal("mailing", "text")} /> </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
            <Container className="mt-1">
                <Card className="p-2 theme-border theme-box-shadow">
                    <CardContent>
                        <Box className="pb-1">
                            <Typography className="text-align-center font-weight-bold" variant="h5"> HIGHEST EDUCATION </Typography>
                        </Box>
                        <Box>
                            <Box className="d-flex">
                                <Box> <School /> </Box>
                                <Box className="ml-1">
                                    <Typography>School: {userData.school}</Typography>
                                </Box>
                                <Box className="ml-1"> <Edit className="d-flex crusor-pointer" onClick={() => openModal("school", "text")} /> </Box>
                            </Box>
                            <Box className="d-flex">
                                <Box> <Rotate90DegreesCcw /> </Box>
                                <Box className="ml-1">
                                    <Typography> Degree/Diploma/Certificate: {userData.degree}</Typography>
                                </Box>
                                <Box className="ml-1"> <Edit className="d-flex crusor-pointer" onClick={() => openModal("degree", "text")} /> </Box>
                            </Box>
                            <Box className="d-flex">
                                <Box> <Contactless /> </Box>
                                <Box className="ml-1">
                                    <Typography>Filed Of Study: {userData.study_type}</Typography>
                                </Box>
                                <Box className="ml-1"> <Edit className="d-flex crusor-pointer" onClick={() => openModal("study_type", "text")} /> </Box>
                            </Box>
                            <Box className="d-flex">
                                <Box> <DateRange /> </Box>
                                <Box className="ml-1">
                                    <Typography> Year Of Study: {userData.study_year}</Typography>
                                </Box>
                                <Box className="ml-1"> <Edit className="d-flex crusor-pointer" onClick={() => openModal("study_year", "text")} /> </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
            <Modal
                isOpen={mode}
                onRequestClose={() => setMode(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Grid container spacing={1}>
                    <Grid item >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label={data.key}
                            value={data.value}
                            type={data.type}
                            onChange={(e) => updateData(e.currentTarget.value)}
                        />
                    </Grid>
                    <Grid item className="d-flex align-items-center">
                        <Button className="bg-theme color-white ml-1" onClick={() => saveData()}>SAVE</Button>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}