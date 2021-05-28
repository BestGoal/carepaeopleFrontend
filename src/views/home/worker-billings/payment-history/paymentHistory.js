import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function PaymentHistory() {

    return (
        <Container className="mt-3">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">AVAILABLE SHIFTS</Typography>
            </Box>
            <Grid container spacing={2} className="mt-2">
                <Grid item md={6} xs={12}>
                    <TextField fullWidth variant="outlined" label="Search by company name" />
                </Grid>
            </Grid>
        </Container>
    )
}