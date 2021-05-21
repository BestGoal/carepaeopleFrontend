import React from "react"
import Container from "@material-ui/core/Container"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import DateRange from "@material-ui/icons/DateRange"
import Timer from "@material-ui/icons/Timer"
import AvTimer from "@material-ui/icons/AvTimer"
import Payment from "@material-ui/icons/Payment"
import SkipPrevious from "@material-ui/icons/SkipPrevious"
import { Root } from "../../../pre/config"

export default function Job() {

    const [mode, setMode] = React.useState(true)

    return (
        <Container className="mt-1 worker-dashboard">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box>
                        <Typography variant="h5">AVAILABLE JOBS</Typography>
                    </Box>
                    <Grid container spacing={2} className="mt-2">
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Search by company name" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box className="worker-select-type">
                                <Button className={mode ? "enable-item" : ""} onClick={() => setMode(true)}>Distance</Button>
                                <Button className={!mode ? "disable-item" : ''} onClick={() => setMode(false)}>Dates</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    {

                    }
                    <Grid container spacing={2} className="mt-2 job-item">
                        <Grid item md={3} xs={12}>
                            <img src={Root.adminUrl + "avatar/happy.png"} alt="" />
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <Typography className="font-weight-bold text-align-center" variant="h5"> UHN-TORONTO WESTERN-ON </Typography>
                            <Typography className="font-weight-bold text-align-center"> personal care aide(PCA) </Typography>
                            <Box className="d-flex align-items-center">
                                <DateRange />
                                <Typography> Mon. May 90, 2021 </Typography>
                            </Box>
                            <Box className="d-flex align-items-center">
                                <Timer />
                                <Typography> Time: 7:30 AM - 7:30 PM (12hrs) </Typography>
                            </Box>
                            <Box className="d-flex align-items-center">
                                <AvTimer />
                                <Typography> Unpaid Break: 30minutes </Typography>
                            </Box>
                            <Box className="d-flex align-items-center">
                                <Payment />
                                <Typography> Pay: $248.55 @ $22/hr </Typography>
                            </Box>
                            <Box className="d-flex align-items-center">
                                <SkipPrevious />
                                <Typography> Instant pay: Available </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}