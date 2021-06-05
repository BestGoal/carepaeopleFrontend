import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Checkbox from '@material-ui/core/Checkbox'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker, MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ArrowDownward from "@material-ui/icons/ArrowDownward"

export default function ClientPost() {

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
    const typeData = [
        { title: 'Single Day', value: 1 },
        { title: 'Multi Day', value: 2 }
    ]

    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const [type, setType] = React.useState(typeData[0]);
    const [mode, setMode] = React.useState(false);

    return (
        <Container className="mt-4 mb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> POST SHIFTS </Typography>
            <Box className="p-2 mt-1 theme-border theme-box-shadow theme-border-radius">
                <Grid container spacing={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Autocomplete
                                fullWidth
                                options={locationData}
                                getOptionLabel={(option) => option.title}
                                value={locationData[0]}
                                renderInput={(params) => <TextField {...params} label="Job Position" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="NO. OF VACANCIES" type="Number" value="1" />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Autocomplete
                                fullWidth
                                options={rateData}
                                getOptionLabel={(option) => option.title}
                                value={rateData[0]}
                                renderInput={(params) => <TextField {...params} label="Hourly Rate" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <Autocomplete
                                fullWidth
                                options={typeData}
                                getOptionLabel={(option) => option.title}
                                value={type}
                                renderInput={(params) => <TextField {...params} label="Event Type" variant="outlined" />}
                                onChange={(e, v) => setType(v)}
                            />
                        </Grid>
                        {
                            type.value === 1 ?
                                <Grid item md={4} sm={6} xs={12}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        label="Select Date"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={setSelectedDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                                :
                                <>
                                    <Grid item md={4} sm={6} xs={12}>
                                        <KeyboardDatePicker
                                            fullWidth
                                            label="Start Date"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={setSelectedDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12}>
                                        <KeyboardDatePicker
                                            fullWidth
                                            label="Last Date"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={setSelectedDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </>
                        }
                        <Grid item md={4} sm={6} xs={12}>
                            <KeyboardTimePicker
                                fullWidth
                                label="Start Time"
                                value={selectedDate}
                                onChange={setSelectedDate}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <KeyboardTimePicker
                                fullWidth
                                label="End Time"
                                value={selectedDate}
                                onChange={setSelectedDate}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth variant="outlined" label="Add Shift Notes" multiline rows={3} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" onClick={() => setMode(!mode)}> <ArrowDownward /> Mods </Button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </Grid>
                {
                    mode ?
                        <Grid container className="mt-1" spacing={3}>
                            <Grid item md={4} sm={6} xs={12}>
                                <TextField fullWidth variant="outlined" label="Add Event Name" />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Autocomplete
                                    fullWidth
                                    options={typeData}
                                    getOptionLabel={(option) => option.title}
                                    value={type}
                                    renderInput={(params) => <TextField {...params} label="Unpaid break" variant="outlined" />}
                                    onChange={(e, v) => setType(v)}
                                />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Autocomplete
                                    fullWidth
                                    options={typeData}
                                    getOptionLabel={(option) => option.title}
                                    value={type}
                                    renderInput={(params) => <TextField {...params} label="TRANSIT ALLOWNCE" variant="outlined" />}
                                    onChange={(e, v) => setType(v)}
                                />
                            </Grid>
                            <Grid item xs={12} className="d-flex justify-content-between bg-eee align-items-center ml-1 mr-1">
                                <Typography>BroadCast to Team</Typography>
                                <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    multiple
                                    options={typeData}
                                    getOptionLabel={(option) => option.title}
                                    defaultValue={[]}
                                    filterSelectedOptions
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Add Event Address"
                                            placeholder="Address"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        : ""
                }
                <Button fullWidth className="bg-theme color-white mt-1"> Send Request </Button>
                <Button fullWidth className="bg-theme color-white mt-1"> Shift to BroadCast </Button>
                <Typography className="mt-1 text-align-center">Please note Staffy's 30% admin fee will be added to the rate.</Typography>
            </Box>
        </Container>
    )
}