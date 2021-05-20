import React from "react"
import Box from "@material-ui/core/Box"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Img from "../../../asset/image/healthcare2.png"

export default function SelectionOne() {
    return (
        <Box>
            <Box className="dashboard-banner" />
            <Box className="dashboard-detail">
                <Box className="dashboard-container mr-auto ml-auto text-align-center">
                    <Box className="dashboard-title p-3">
                        <Typography className="font-weight-bold dashboard-letter" variant="h4"> HEALTH CARE </Typography>
                        <Typography className="font-weight-bold dashboard-letter p-1" variant="h5"> Hire worker in minute </Typography>
                        <Button className="bg-transparent box-shadow-none hire-worker-btn" variant="contained"> Hire Workers </Button>
                    </Box>
                </Box>
                <Box className="dashboard-staffers">
                    <Grid container className="dashboard-staffers-bg">
                        <Grid item md={6} sm={12}>
                            <img className="dashboard-img" src={Img} alt="" />
                        </Grid>
                        <Grid item md={6} sm={12} className="d-flex align-items-center dashboard-staffers-main">
                            <Box>
                                <Typography className="font-weight-bold dashboard-staffers-header"> YOUR ONE-STOP SHOP </Typography>
                                <Typography className="dashboard-staffers-letter">
                                    From Personal Support Workers (PSWs) and nurses (RPNs, RNS) to dietary aides and cleaners, we have thousands of qualified health care workers vetted and ready on Staffy.
                                </Typography>
                                <Typography className="dashboard-staffers-letter">
                                    We work with professionals only. Many of our healthcare workers have been referred through industry associations or colleagues who’ve worked with Staffy in the past.
                                </Typography>
                                <Typography className="dashboard-staffers-letter">
                                    Whether it’s a last minute backfill or a planned augmentation, hire qualified health care workers today.
                                </Typography>
                                <Typography className="dashboard-staffers-letter">
                                    Go on. Give it a try!
                                </Typography>
                                <Box className="d-flex justify-content-center">
                                    <Button className="bg-transparent box-shadow-none mt-2 download-btn" variant="contained">
                                        <p> Download </p>
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="text-align-center">
                    <Typography variant="h5">
                        PARTNERS
                    </Typography>
                    <Typography>
                        We’re proud to support top companies across North America
                    </Typography>
                    <Box className="mt-2">

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}