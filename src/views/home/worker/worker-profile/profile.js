import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import StarRatings from 'react-star-ratings';
import { Root } from "../../../../pre/config"

export default function Profile() {
    return (
        <Container className="mt-1 worker-profile">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Box className="d-flex justify-content-center">
                                <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Box className="theme-box-shadow p-2">
                                <Box className="d-flex align-items-center">
                                    <Typography variant="h4"> Denis postnykhdo </Typography>
                                    <Typography variant="h6" className="ml-1"> (PSW / PCA) </Typography>
                                </Box>
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