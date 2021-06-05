import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';

export default function ClientPost({ status }) {
    return (
        <Box className="mt-1">
            <Grid container className="post-item-header">
                <Grid item sm={4} xs={6} className="d-flex align-items-center">
                    <Typography className="font-weight-bold">{"Date"}</Typography>
                </Grid>
                <Grid item sm={4} xs={3} className="d-flex align-items-center">
                    <Typography className="font-weight-bold">{"Start time"}</Typography>
                </Grid>
                <Grid item sm={4} xs={3} className="d-flex align-items-center">
                    <Typography className="font-weight-bold">{"End time"}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}