import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

export default function ClientPost({ multiClock, dateData, changeTimeFunc, makeMultiClick }) {

    const getDateString = (item = false) => {
        let string = "";
        if (item) {
            string = item.date;
        } else {
            for (let i = 0; i < dateData.length; i++) {
                string += dateData[i].date;
                if (dateData.length - 1 !== i) {
                    string += ", "
                }
            }
        }
        return string
    }

    const getTimeString = (item = false, key = false) => {
        let string = "";
        if (item) {
            if (key === true) {
                string = new Date(item.date + " " + item.start);
            } else {
                string = new Date(item.date + " " + item.end);
            }
        } else if (dateData.length) {
            if (key === true) {
                string = new Date(dateData[0].date + " " + dateData[0].start);
            } else {
                string = new Date(dateData[0].date + " " + dateData[0].end);
            }
        } else {
            string = new Date();
        }
        return string
    }

    const changeTime = (item = false, time, key) => {
        if (item) {
            if (key) {
                changeTimeFunc(item, time, item.end)
            } else {
                changeTimeFunc(item, item.start, time)
            }
        } else {
            if (key) {
                changeTimeFunc(item, time, dateData[0].end)
            } else {
                changeTimeFunc(item, dateData[0].start, time)
            }
        }
    }

    return (
        <Box className="mt-1">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {
                    !multiClock ?
                        <Grid container>
                            <Grid item sm={4} xs={12}>
                                <Typography className="post-item-header">DAY</Typography>
                                <Box className="p-1">
                                    {getDateString(false)}
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography className="post-item-header">START TIME</Typography>
                                <Box className="p-1">
                                    <KeyboardTimePicker
                                        fullWidth
                                        value={getTimeString(false, true)}
                                        onChange={(e) => changeTime(false, e.toLocaleTimeString(), true)}
                                    />
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography className="post-item-header">END TIME</Typography>
                                <Box className="p-1">
                                    <KeyboardTimePicker
                                        fullWidth
                                        value={getTimeString(false, false)}
                                        onChange={(e) => changeTime(false, e.toLocaleTimeString(), false)}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        :
                        dateData.map((item, i) => (
                            <Grid container key={i}>
                                <Grid item sm={4} xs={12}>
                                    <Typography className="post-item-header">{`DAY ${i+1}`}</Typography>
                                    <Box className="p-1 pl-0">
                                        {item.date}
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography className="post-item-header">START TIME</Typography>
                                    <Box className="p-1">
                                        <KeyboardTimePicker
                                            fullWidth
                                            value={getTimeString(item, true)}
                                            onChange={(e) => changeTime(item, e.toLocaleTimeString(), true)}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography className="post-item-header">END TIME</Typography>
                                    <Box className="p-1">
                                        <KeyboardTimePicker
                                            fullWidth
                                            value={getTimeString(item, false)}
                                            onChange={(e) => changeTime(item, e.toLocaleTimeString(), false)}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        ))
                }
            </MuiPickersUtilsProvider>
            {
                multiClock &&
                    <Box className="d-flex justify-content-end mb-1">
                        <Button onClick={()=>makeMultiClick()} className="bg-theme color-white">DISCARD</Button>
                    </Box>
            }
        </Box>
    )
}