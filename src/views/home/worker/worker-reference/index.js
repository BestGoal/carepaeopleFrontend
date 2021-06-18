import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
    DatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EmojiTransportation from "@material-ui/icons/EmojiTransportation"
import PersonPin from "@material-ui/icons/PersonPin"
import Email from "@material-ui/icons/Email"
import PlayArrow from "@material-ui/icons/PlayArrow"
import Stop from "@material-ui/icons/Stop"

export default function WorkerReference() {

    const [mode, SetMode] = React.useState(false)

    const [selectedDate, setSelectedDate] = React.useState(new Date())
    let data = [
        {
            companyName: "Quality Homecare Services",
            contactPerson: "Aundrea O'Leary",
            email: "aundreaqhc@gmail.com",
            startDate: "06/18/2020",
            endDate: "06/25/2020"
        },
        {
            companyName: "Quality Homecare Services",
            contactPerson: "Aundrea O'Leary",
            email: "aundreaqhc@gmail.com",
            startDate: "06/18/2020",
            endDate: "06/25/2020"
        },
        {
            companyName: "Quality Homecare Services",
            contactPerson: "Aundrea O'Leary",
            email: "aundreaqhc@gmail.com",
            startDate: "06/18/2020",
            endDate: "06/25/2020"
        },
    ]

    const locationData = [
        { title: 'Chiropractor', value: 25 },
        { title: 'Chiropractic  Assistant', value: 25 },
        { title: 'Dietary Aide', value: 25 },
        { title: 'Dentist', value: 25 },
        { title: 'Dental Hygienist', value: 25 },
        { title: 'Dental Assistant', value: 25 },
        { title: 'Health Care Aide', value: 25 },
        { title: 'Home Health Aide', value: 25 },
        { title: 'Laboratory Technician', value: 25 },
        { title: 'Massage Therapist', value: 25 },
        { title: 'Nurse Practitioner', value: 25 },
        { title: 'Occupational Therapist', value: 25 },
        { title: 'Occupational Therapy Assistant', value: 25 },
        { title: 'Osteopath', value: 25 },
        { title: 'Physical Therapist', value: 25 },
        { title: 'Physical Therapy Assistant', value: 25 },
        { title: 'Psychiatrist', value: 25 },
        { title: 'Psychiatry Physician Assistant', value: 25 },
        { title: 'Psychologist', value: 25 },
        { title: 'Physician ', value: 25 },
        { title: 'Physician Assistant', value: 25 },
        { title: 'Pharmacist', value: 25 },
        { title: 'Pharmacy Assistant', value: 25 },
        { title: 'Physiotherapist', value: 25 },
        { title: 'Physiotherapy Assistant', value: 25 },
        { title: 'Personal Support Worker ', value: 25 },
        { title: 'Personal Care Aide', value: 25 },
        { title: 'Registered Nurse', value: 25 },
        { title: 'Registered Practical Nurse', value: 25 },
        { title: 'Radiologist', value: 25 },
        { title: 'Radiographer', value: 25 },
        { title: 'Residential Care Aide', value: 25 },
        { title: 'Speech Language Therapist', value: 25 },
    ]

    return (
        <Container className="container pt-2 mb-1 worker-reference">
            <Card className="p-2 theme-border theme-box-shadow">
                <CardContent>
                    <Box className="pb-1 border-botton-1">
                        <Typography className="text-align-center font-weight-bold" variant="h5"> Your References </Typography>
                    </Box>
                    {
                        data.map((item, key) => (
                            <Box className="mt-1 border-botton-1" key={key}>
                                <Box className="d-flex">
                                    <EmojiTransportation />
                                    <Typography className="font-weight-bold ml-1">Company Name:</Typography>
                                    &nbsp;&nbsp;&nbsp;
                                    <Typography>{item.companyName}</Typography>
                                </Box>
                                <Box className="d-flex">
                                    <PersonPin />
                                    <Typography className="font-weight-bold ml-1">Contact Person:</Typography>
                                    &nbsp;&nbsp;&nbsp;
                                    <Typography>{item.contactPerson}</Typography>
                                </Box>
                                <Box className="d-flex">
                                    <Email />
                                    <Typography className="font-weight-bold ml-1">Email Address:</Typography>
                                    &nbsp;&nbsp;&nbsp;
                                    <Typography>{item.email}</Typography>
                                </Box>
                                <Box className="d-flex">
                                    <PlayArrow />
                                    <Typography className="font-weight-bold ml-1">Start Date:</Typography>
                                    &nbsp;&nbsp;&nbsp;
                                    <Typography>{item.startDate}</Typography>
                                </Box>
                                <Box className="d-flex">
                                    <Stop />
                                    <Typography className="font-weight-bold ml-1">End Date:</Typography>
                                    &nbsp;&nbsp;&nbsp;
                                    <Typography>{item.endDate}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                    <Box className="d-flex justify-content-center mt-1">
                        <Button className="theme-border bg-theme color-white" onClick={() => SetMode(true)}>Add Reference</Button>
                    </Box>
                </CardContent>
            </Card>

            <Dialog open={mode} onClose={() => SetMode(false)}>
                <DialogTitle>Add New Reference</DialogTitle>
                <DialogContent className="m-1 overflow-hidden">
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Company Name" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Contact person" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField fullWidth variant="outlined" label="Company Email Address" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={locationData}
                                getOptionLabel={(option) => option.title}
                                onChange={(e, v) => console.log(v)}
                                renderInput={(params) => <TextField {...params} label="Your Job Function" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    className="m-0"
                                    disableToolbar
                                    format="MM/dd/yyyy"
                                    variant="inline"
                                    value={selectedDate}
                                    onChange={setSelectedDate}
                                    margin="normal"
                                    label="Start Date"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    className="m-0"
                                    disableToolbar
                                    format="MM/dd/yyyy"
                                    variant="inline"
                                    value={selectedDate}
                                    onChange={setSelectedDate}
                                    margin="normal"
                                    label="End Date"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => SetMode(false)}>Cancel</Button>
                    <Button onClick={() => SetMode(false)} className="theme-border bg-theme color-white">Add</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}