import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import StarRatings from 'react-star-ratings';
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import { Root } from "../../../../pre/config"
import { locationData } from "../../../../configs/index"
import { ProfileUpdate } from "../../../../redux/action/profile/profileRequest"
import { LoginAction } from "../../../../redux/action/auth/loginActions"

export default function Profile() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData)
    const [stateUserData, setStateUserData] = useState({})
    const [tempAvatar, setTempAvatar] = useState(null)

    useEffect(() => {
        setStateUserData(userData)
        setTempAvatar(Root.adminUrl + userData.avatar)
    }, [userData])

    const ChooseImage = async (e) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setTempAvatar(fileReader.result);
        }
        if(e.target.files[0]) {
            const fpdata = new FormData();
            fpdata.append('id', stateUserData._id);
            fpdata.append('avatar', e.target.files[0]);
            fpdata.append('data', JSON.stringify({}));
            let rdata = await ProfileUpdate(fpdata, dispatch);
            if(rdata) {
                dispatch(LoginAction(true, rdata))
            }
        }
    }

    return (
        <Container className="mt-1 worker-profile">
            <Card className="p-2 theme-border theme-box-shadow theme-border-radius">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Box className="d-flex justify-content-center avatar">
                                <img className="avatar crusor-pointer" src={tempAvatar} alt="" onClick={()=>document.getElementById("file").click()} />
                                <input id="file" type="file" style={{ display: "none" }} onChange={e => ChooseImage(e)} />
                                <PhotoCamera className="crusor-pointer camera" />
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Box className="theme-box-shadow p-2">
                                <Typography variant="h4">{`${stateUserData.firstName} ${stateUserData.lastName}`}</Typography>
                                <Typography variant="h6">{`( ${locationData.filter(item=>item.value === Number(stateUserData.jobPosition))[0]?.title} )`}</Typography>
                                <Grid container className="mt-2">
                                    <Grid item xs={6} className="d-flex align-items-center pl-3">
                                        <Badge badgeContent={"APPROVED"} color="primary"></Badge>
                                    </Grid>
                                    <Grid item xs={6} className="d-flex align-items-center ml-3">
                                        <Typography>5.0</Typography>
                                        <StarRatings
                                            className="ml-1"
                                            rating={5}
                                            starRatedColor="#f57207"
                                            starHoverColor="#f57207"
                                            numberOfStars={5}
                                            starDimension="20px"
                                            starSpacing="2px"
                                        />
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