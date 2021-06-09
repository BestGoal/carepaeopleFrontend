import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete';
import ModifiedDatePicker from "./modifiedDatePicker"
import ArrowDownward from "@material-ui/icons/ArrowDownward"

export default function ClientPost() {

    const [dayType, SetDayType] = React.useState(true)
    const [mode, setMode] = React.useState(false);

    const locationData = [
        { title: 'A city', value: 25 },
        { title: 'B city', value: 24 },
        { title: 'C city', value: 23 },
        { title: 'D city', value: 22 },
        { title: 'E city', value: 21 },
        { title: 'F city', value: 20 },
    ]

    const rateData = [
        { title: '$25 per hour', value: 25 },
        { title: '$24 per hour', value: 24 },
        { title: '$23 per hour', value: 23 },
        { title: '$22 per hour', value: 22 },
        { title: '$21 per hour', value: 21 },
        { title: '$20 per hour', value: 20 },
    ]

    return (
        <Container className="container client-home">
            <Typography variant="h5" className="text-align-center font-weight-bold"> POST SHIFTS </Typography>
            <Box className="main-container theme-border theme-box-shadow theme-border-radius client-post">
                <Grid container>
                    <Grid item sm={4} xs={12}>
                        <Typography className="post-item-header">JOB POSITION</Typography>
                        <Box className="p-1 pl-0">
                            <Autocomplete
                                fullWidth
                                options={locationData}
                                getOptionLabel={(option) => option.title}
                                value={locationData[0]}
                                renderInput={(params) => <TextField {...params} variant="outlined" />}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography className="post-item-header">NO.OF VACANCIES</Typography>
                        <Box className="p-1 pl-0">
                            <TextField fullWidth variant="outlined" type="Number" value="1" />
                        </Box>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography className="post-item-header">HOURLY RATE</Typography>
                        <Box className="p-1 pl-0">
                            <Autocomplete
                                fullWidth
                                options={rateData}
                                getOptionLabel={(option) => option.title}
                                value={rateData[0]}
                                renderInput={(params) => <TextField {...params} variant="outlined" />}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="post-item-header">EVENT TYPE</Typography>
                        <Grid container>
                            <Grid item sm={4} xs={6} className="d-flex justify-content-between align-items-center p-1 crusor-pointer" onClick={() => SetDayType(true)}>
                                <Typography className="font-weight-bold">Single Day</Typography>
                                <Checkbox checked={dayType} color="primary" />
                            </Grid>
                            <Grid item sm={4} xs={6} className="d-flex justify-content-between align-items-center p-1 crusor-pointer" onClick={() => SetDayType(false)}>
                                <Typography className="font-weight-bold">Multi Day</Typography>
                                <Checkbox checked={!dayType} color="primary" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <ModifiedDatePicker status={dayType} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="post-item-header">ADD SHIFT NOTES</Typography>
                        <TextField className="mt-1" fullWidth variant="outlined" multiline rows={3} />
                    </Grid>
                    <Grid item xs={12} className="mt-1">
                        <Button fullWidth variant="contained" onClick={() => setMode(!mode)}> <ArrowDownward /> Mods </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}