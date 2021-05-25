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
// import KeyboardDatePicker from '@material-ui/pickers/KeyboardDatePicker';

import EmojiTransportation from "@material-ui/icons/EmojiTransportation"
import PersonPin from "@material-ui/icons/PersonPin"
import Email from "@material-ui/icons/Email"
import PlayArrow from "@material-ui/icons/PlayArrow"
import Stop from "@material-ui/icons/Stop"

export default function Profile() {

    const [mode, SetMode] = React.useState(false)

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

    let jobItems = [
        { title: 'FirstJob', value: 1 },
        { title: 'SecondJob', value: 2 },
    ]

    return (
        <Container className="mt-1">
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
                        {
                            !mode ?
                                <Button variant="contained" className="theme-border bg-theme color-white" onClick={() => SetMode(true)}>Add Reference</Button>
                                :
                                <Box className="add-reference">
                                    <Grid container spacing={3}>
                                        <Grid item md={6} xs={12}>
                                            <TextField fullWidth variant="outlined" label="Company Name" className="width-100" />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField fullWidth variant="outlined" label="Contact person" className="width-100" />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField fullWidth variant="outlined" label="Company Email Address" className="width-100" />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Autocomplete
                                                id="combo-box-demo"
                                                options={jobItems}
                                                getOptionLabel={(option) => option.title}
                                                onChange={(e, v) => console.log(v)}
                                                renderInput={(params) => <TextField {...params} label="Your Job Function" variant="outlined" />}
                                            />
                                        </Grid>
                                        {/* <Grid item md={6} xs={12}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Date picker inline"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </Grid> */}




                                    </Grid>
                                </Box>
                        }
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}