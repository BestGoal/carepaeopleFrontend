import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import StarRatings from 'react-star-ratings';

// import CancelPresentation from "@material-ui/icons/CancelPresentation"
import { Root } from "../../../../pre/config"


export default function ClientProfile() {
    return (
        <Container className="client-home container pt-2 mb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> HIRED WORKERS </Typography>
            <Grid container spacing={2} className="theme-border theme-box-shadow worker-profile theme-border-radius p-1 mt-2">
                <Grid item md={3} xs={12}>
                    <Box className="d-flex justify-content-start">
                        <img className="avatar" src={Root.adminUrl + "avatar/avatar.webp"} alt="" />
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
                <Grid item md={9} xs={12}>
                    <Box className="p-1 mt-4">
                        <Box className="d-flex align-items-center justify-content-center">
                            <Typography variant="h3"> Denis postnykhdo </Typography>
                        </Box>
                        <Box className="d-flex align-items-center justify-content-center">
                            <Typography > Personal Support Worker </Typography>
                        </Box>
                    </Box>
                    <Box className="d-flex justify-content-between text-align-center mt-3">
                        <Button className="bg-theme color-white ml-1 theme-border-radius" fullWidth>Block</Button>
                        <Button className="bg-theme color-white ml-1 theme-border-radius" fullWidth>Rehire</Button>
                        <Button className="bg-theme color-white ml-1 theme-border-radius" fullWidth>Rate</Button>
                    </Box>
                </Grid>
            </Grid>
            {/* <Box className="p-3 mt-1 theme-border theme-box-shadow theme-border-radius client-profile">
                <Box className="text-align-center">
                    <CancelPresentation className="noexist-icon" />
                    <Typography>No workers found.</Typography>
                </Box>
            </Box> */}
        </Container>
    )
}