import React from "react"
import Container from "@material-ui/core/Container"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default function Schedule() {
    return (
        <Container className="mt-1 worker-dashboard">
            <Card className="p-2">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            Schedule
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}