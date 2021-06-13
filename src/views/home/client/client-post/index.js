import React, { useState, useEffect } from "react"
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
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import Add from "@material-ui/icons/Add"

export default function ClientPost() {

    const [dayType, SetDayType] = useState(true)
    const [mode, setMode] = useState(false);
    const [addressFlag, setAddressFlag] = useState(false);
    const [vacancieData, setVacaniceData] = useState([{ title: "1", value: "1" }]);
    const [rateData, setRateData] = useState([{ title: '$15 per hour', value: 15 }]);

    useEffect(() => {
        let tempVacineData = [];
        for (let i = 1; i <= 50; i++) {
            let temp = {
                title: String(i), value: i
            }
            tempVacineData.push(temp);
        }
        tempVacineData.push({
            title: "Other", value: "No Option"
        });
        setVacaniceData(tempVacineData);

        let tempRateData = [];
        for (let i = 15; i <= 100; i++) {
            let temp = {
                title: `${i} per hour`, value: i
            }
            tempRateData.push(temp);
        }
        tempRateData.push({
            title: "Other", value: "No Option"
        });
        setRateData(tempRateData);
    }, [])

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

    const breakData = [
        { title: 'No Break', value: 0 },
        { title: '30 Minute', value: 1 },
        { title: '45 Minute', value: 2 },
        { title: '60 Minute', value: 3 },
        { title: '120 Minute', value: 4 },
    ]

    const transitData = [
        { title: 'None', value: 0 },
        { title: '1 Hour', value: 1 },
        { title: '2 Hour', value: 2 },
        { title: '3 Hour', value: 3 },
        { title: '4 Hour', value: 4 },
        { title: '5 Hour', value: 5 },
        { title: '6 Hour', value: 6 },
        { title: '7 Hour', value: 7 },
        { title: '8 Hour', value: 8 },
        { title: '9 Hour', value: 9 },
        { title: '10 Hour', value: 10 },
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
                            <Autocomplete
                                fullWidth
                                options={vacancieData}
                                getOptionLabel={(option) => option.title}
                                value={vacancieData[0]}
                                renderInput={(params) => <TextField {...params} variant="outlined" />}
                            />
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
                            <Grid item sm={4} xs={6} className="d-flex justify-content-start align-items-center p-1 crusor-pointer" onClick={() => SetDayType(true)}>
                                <Typography className="font-weight-bold">Single Day</Typography>
                                <Checkbox checked={dayType} color="primary" />
                            </Grid>
                            <Grid item sm={4} xs={6} className="d-flex justify-content-start align-items-center p-1 crusor-pointer" onClick={() => SetDayType(false)}>
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
                        <TextField fullWidth variant="outlined" multiline rows={3} />
                    </Grid>
                    <Grid item xs={12} className="mt-1">
                        <Button fullWidth variant="contained" onClick={() => setMode(!mode)}>
                            {
                                !mode ? <ArrowDownward /> : <ArrowUpward />
                            }
                            Mods
                        </Button>
                    </Grid>
                    {
                        mode ?
                            <>
                                <Grid item sm={4} xs={12} className="mt-1">
                                    <Typography className="post-item-header">ADD EVENT NAME</Typography>
                                    <TextField className="mt-1" fullWidth variant="outlined" />
                                </Grid>
                                <Grid item sm={4} xs={12} className="mt-1">
                                    <Typography className="post-item-header">UNPAID BREAK</Typography>
                                    <Box className="p-1">
                                        <Autocomplete
                                            fullWidth
                                            options={breakData}
                                            getOptionLabel={(option) => option.title}
                                            value={breakData[0]}
                                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xs={12} className="mt-1">
                                    <Typography className="post-item-header">TRANSIT ALLOWANCE</Typography>
                                    <Box className="p-1">
                                        <Autocomplete
                                            fullWidth
                                            options={transitData}
                                            getOptionLabel={(option) => option.title}
                                            value={transitData[0]}
                                            renderInput={(params) => <TextField {...params} variant="outlined" />}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="post-item-header">SELECT EVENT ADDRESS</Typography>
                                    <Box className="p-1 d-flex justify-content-between align-items-center">
                                        <Typography className="font-weight-bold">23 Etobicoke Creek Trail, Mississauga, ON L4W 5N3, Canada</Typography>
                                        <Checkbox color="primary" />
                                    </Box>
                                    {
                                        !addressFlag ?
                                            <Box
                                                className={`
                                        p-1 pt-0 d-flex align-items-center color-theme crusor-pointer`
                                                }
                                                onClick={() => setAddressFlag(!addressFlag)}
                                            >
                                                <Add /><Typography className="">ADD NEW ADDRESS</Typography>
                                            </Box>
                                            :
                                            <Box
                                                className={`
                                        p-1 pt-0 d-flex align-items-center justify-content-between`
                                                }
                                            >
                                                <TextField fullWidth variant="outlined" />
                                                <Button fullWidth className="bg-theme color-white ml-1">Save</Button>
                                            </Box>
                                    }
                                </Grid>
                            </> : <></>
                    }
                    <Grid item xs={12} className="d-flex justify-content-between mt-1">
                        <Button fullWidth className="bg-theme color-white">REQUEST DEDICATED POOL</Button>
                        <Button fullWidth className="bg-theme color-white ml-1">POST DIRECT SHIFTS</Button>
                    </Grid>
                    <Typography className="mt-1 text-align-center">Please note that 15% admin fee will be added to the rate.</Typography>
                </Grid>
            </Box>
        </Container>
    )
}