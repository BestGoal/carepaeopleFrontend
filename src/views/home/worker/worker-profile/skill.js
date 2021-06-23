import React from "react"
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { locationData } from "../../../../configs/index"

export default function Profile() {

    const userData = useSelector(state => state.auth.userData)

    return (
        <Container className="mt-1 mb-1">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box className="pb-1">
                        <Typography className="text-align-center font-weight-bold" variant="h5"> SKILLS </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box className="theme-border theme-border-radius p-2">
                                <Typography variant="h6" className="text-align-center">{`( ${locationData.filter(item=>item.value === Number(userData.jobPosition))[0].title} )`}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}