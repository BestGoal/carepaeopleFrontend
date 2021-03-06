import React from "react"
import { useSelector } from "react-redux"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn"
import MonetizationOn from "@material-ui/icons/MonetizationOn"
import StarRatings from 'react-star-ratings';
import { Root } from "../../../../pre/config"
import { locationData } from "../../../../configs/index"

export default function WorkerProfile() {

    const userData = useSelector(state => state.auth.userData)

    return (
        <Container className="p-2">
            <Grid container spacing={2} className="theme-border theme-box-shadow worker-profile theme-border-radius p-1">
                <Grid item md={4} xs={12}>
                    <Box className="d-flex justify-content-center">
                        <img className="avatar" src={ Root.adminUrl + userData.avatar} alt="" />
                    </Box>
                    <Box className="d-flex justify-content-center align-items-center mt-1">
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
                    </Box>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Box className="p-2">
                        <Box className="">
                            <Typography variant="h4">{`${userData.firstName} ${userData.lastName}`}</Typography>
                            <Typography variant="h6">{`( ${locationData.filter(item=>item.value === Number(userData.jobPosition))[0].title} )`}</Typography>
                        </Box>
                        <Box className="d-flex mt-2">
                            <Box className="d-flex align-items-center">
                                <AssignmentTurnedIn />
                                <Typography className="font-weight-bold"> Shifts Completed: </Typography>
                                <Typography className="ml-1"> 15 </Typography>
                            </Box>
                            <Box className="d-flex align-items-center ml-3">
                                <MonetizationOn />
                                <Typography className="font-weight-bold"> Earnings: </Typography>
                                <Typography className="ml-1"> $ 2398.76 </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="d-flex justify-content-between text-align-center mt-2">
                        <Card className="pl-1 pr-1 theme-border theme-border-radius">
                            <CardContent>
                                <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                <Typography> Cancel </Typography>
                            </CardContent>
                        </Card>
                        <Card className="pl-1 pr-1 theme-border theme-border-radius">
                            <CardContent>
                                <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                <Typography> No Shows </Typography>
                            </CardContent>
                        </Card>
                        <Card className="pl-1 pr-1 theme-border theme-border-radius">
                            <CardContent>
                                <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                <Typography> Late Arrival </Typography>
                            </CardContent>
                        </Card>
                        <Card className="pl-1 pr-1 theme-border theme-border-radius">
                            <CardContent>
                                <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                <Typography> Punctual </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}