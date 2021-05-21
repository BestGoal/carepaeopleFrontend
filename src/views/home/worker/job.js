import React from "react"
import Container from "@material-ui/core/Container"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function Job() {
    return (
        <Container className="mt-1 worker-dashboard">
            <Card className="p-2">
                <CardContent>
                    <Box>
                        <Typography variant="h5">AVAILABLE JOBS</Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}