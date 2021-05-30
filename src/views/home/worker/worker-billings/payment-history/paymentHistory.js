import React from "react"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import CancelPresentation from "@material-ui/icons/CancelPresentation"

export default function PaymentHistory() {

    return (
        <Container className="mt-3">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">PAYMENT HISTORY</Typography>
            </Box>
            <Grid container spacing={2} className="mt-2">
                <Grid item xs={12}>
                    <Box className="text-align-center">
                        <CancelPresentation style={{width: "100px", height: "100px"}} />
                        <Typography>No payment found.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}