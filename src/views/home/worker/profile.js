import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import StarRatings from 'react-star-ratings';
import { Root } from "../../../pre/config"

export default function Profile() {
    return (
        <Container className="mt-1 worker-dashboard">
            <Card className="p-2 theme-box-shadow theme-border">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Box>
                                <img className="profile-avatar" src={Root.adminUrl + "avatar/team-04.jpg"} alt="" />
                            </Box>
                            <Box className="d-flex justify-content-center align-items-center mt-1">
                                <Typography>4.0</Typography>
                                <StarRatings
                                    className="ml-1"
                                    rating={4}
                                    starRatedColor="#f57207"
                                    starHoverColor="#f57207"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Card className="d-flex align-items-center justify-content-center theme-border theme-box-shadow">
                                <CardContent>
                                    <Box className="d-flex align-items-center">
                                        <Typography variant="h4"> Ragul RagulSekar </Typography>
                                        <Typography variant="h6" className="ml-1"> (PSW / PCA) </Typography>
                                    </Box>
                                    <Box className="d-flex align-items-center mt-2 justify-content-center">
                                        <Typography className="font-weight-bold p-1 theme-box-shadow"> May 09 - 15 </Typography>
                                    </Box>
                                    <Box className="d-flex align-items-center mt-2">
                                        <Box className="d-flex align-items-center">
                                            <Typography className="font-weight-bold"> Total time worked : </Typography>
                                            <Typography className="ml-1"> 40h 29m </Typography>
                                        </Box>
                                        <Box className="d-flex align-items-center ml-2">
                                            <Typography className="font-weight-bold"> Total Earning : </Typography>
                                            <Typography className="ml-1"> $ 2398.76 </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Box className="d-flex justify-content-between theme-border theme-box-shadow text-align-center mt-2">
                                <Card className="pl-1 pr-1 box-shadow-none">
                                    <CardContent>
                                        <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                        <Typography> Cancel </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="pl-1 pr-1 box-shadow-none">
                                    <CardContent>
                                        <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                        <Typography> No Shows </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="pl-1 pr-1 box-shadow-none">
                                    <CardContent>
                                        <Typography className="profile-count font-weight-bold"> 1 </Typography>
                                        <Typography> Late Arrival </Typography>
                                    </CardContent>
                                </Card>
                                <Card className="pl-1 pr-1 box-shadow-none">
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