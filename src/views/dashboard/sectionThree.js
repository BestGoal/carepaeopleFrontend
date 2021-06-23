import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Root } from "../../pre/config"
import { history } from "../../history"

export default function SelectionOne() {
    return (
        <Box className="section-footer">
            <Container>
                <Grid className="footer-grid mt-2 p-2" container spacing={3}>
                    <Grid item md={4} sm={6}>
                        <Typography variant="h5" className="font-weight-bold">CareShifts.ca</Typography>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/facebook.png"} alt="" className="social-img" />
                            <Typography className="ml-1">FaceBook</Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/instagram.png"} alt="" className="social-img" />
                            <Typography className="ml-1">Instagram</Typography>
                        </Box>
                        <Box className="d-flex align-items-center mt-1 crusor-pointer">
                            <img src={Root.adminUrl + "social/twitter.png"} alt="" className="social-img" />
                            <Typography className="ml-1">Twitter</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Typography variant="h6" className="font-weight-bold">Shifts</Typography>
                        <Typography className="mt-1 crusor-pointer" onClick={()=>history.push("/client-register")}>Post Shifts</Typography>
                        <Typography className="mt-1 crusor-pointer" onClick={()=>history.push("/worker-register")}>Work Shifts</Typography>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Typography variant="h6" className="font-weight-bold">Information</Typography>
                        <Typography className="mt-1 crusor-pointer">Terms of Service</Typography>
                        <Typography className="mt-1 crusor-pointer">Privacy Policy</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography className="pt-1 crusor-pointer footer-border">Copyright © 2021 - CareShifts.ca. All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}



