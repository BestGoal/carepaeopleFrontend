import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Root } from "../../pre/config"

export default function SelectionOne() {
    return (
        <Box className="section-footer">
            <Container>
                <Grid container spacing={3} className="mt-2 p-3">
                    <Grid item md={4}>
                        <Typography variant="h5" className="font-weight-bold">CareShifts.ca</Typography>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/facebook.png"} alt="" style={{ width: "24px" }} />
                            <Typography className="ml-1">FaceBook</Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/instagram.png"} alt="" style={{ width: "24px" }} />
                            <Typography className="ml-1">Instagram</Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/linkdin.png"} alt="" style={{ width: "24px" }} />
                            <Typography className="ml-1">LinkdIn</Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/twitter.png"} alt="" style={{ width: "24px" }} />
                            <Typography className="ml-1">Twitter</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h6" className="font-weight-bold">Shifts</Typography>
                        <Typography className="mt-1 crusor-pointer">Post Shifts</Typography>
                        <Typography className="mt-1 crusor-pointer">Work Shifts</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h6" className="font-weight-bold">Information</Typography>
                        <Typography className="mt-1 crusor-pointer">About Us</Typography>
                        <Typography className="mt-1 crusor-pointer">Terms of service</Typography>
                        <Typography className="mt-1 crusor-pointer">Privacy Policy</Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography className="pt-1 crusor-pointer footer-border">Copyright © 2021 - CareShifts.ca. All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}



