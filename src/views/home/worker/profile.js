import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn"
import MonetizationOn from "@material-ui/icons/MonetizationOn"
import StarRatings from 'react-star-ratings';
import { Root } from "../../../pre/config"

export default function Profile() {
    return (
        <Container className="mt-1 worker-dashboard">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Box className="d-flex justify-content-center">
                                <img className="profile-avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
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
                            <Box className="theme-box-shadow p-2">
                                <Box className="d-flex align-items-center">
                                    <Typography variant="h4"> Denis postnykhdo </Typography>
                                    <Typography variant="h6" className="ml-1"> (PSW / PCA) </Typography>
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
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </Container>
    )
}