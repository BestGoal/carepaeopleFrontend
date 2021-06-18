import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import clsx from "clsx"
import AirbnbSlider from "../../../../baseComponent/slider"
const oneWeek = [
    "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"
]

const oneDay = 86400000;

function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </span>
    );
}

export default function SetAvailable() {

    const [mode, SetMode] = useState(true)
    const [data, SetData] = useState([])

    useEffect(() => {
        makeData(true)
    }, [])

    const updateModeData = (item, key) => {
        let tempData = data;
        let index;
        if (mode) {
            index = tempData.findIndex(it => it.name === item.name);
        } else {
            index = tempData.findIndex(it => it.date === item.date);
        }
        tempData[index].flag = key;
        SetData([...tempData])
    }

    const changeTime = (item, time) => {
        let tempData = data;
        let index;
        if (mode) {
            index = tempData.findIndex(it => it.name === item.name);
        } else {
            index = tempData.findIndex(it => it.date === item.date);
        }
        let firstmiri = oneDay * time[0] / 100;
        let secondmiri = oneDay * time[1] / 100;

        let firstTime = new Date(new Date(new Date().toLocaleDateString() + " 06:00:00").valueOf() + firstmiri).toLocaleTimeString()
        let secondTime = new Date(new Date(new Date().toLocaleDateString() + " 06:00:00").valueOf() + secondmiri).toLocaleTimeString()

        tempData[index].stime = firstTime;
        tempData[index].etime = secondTime;
        SetData([...tempData])
    }

    const changeMode = (key) => {
        makeData(key)
        SetMode(key);
    }

    const makeData = (key) => {
        if (key) {
            let temp = [];
            for (let i = 0; i < oneWeek.length; i++) {
                temp.push({
                    name: oneWeek[i],
                    date: "",
                    flag: true,
                    stime: "06:00:00 AM",
                    etime: "06:00:00 AM"
                })
            }
            SetData(temp)
        } else {
            let temp = [];
            for (let i = 0; i < 14; i++) {
                let weekName = ""
                let date = new Date(new Date().valueOf() + (i * oneDay)).toLocaleDateString()
                if(i === 0) { 
                    weekName = "Today"
                } else {
                    weekName = oneWeek[new Date(new Date().valueOf() + (i * oneDay)).getDay()]
                }
                temp.push({
                    name: weekName,
                    date,
                    flag: true,
                    stime: "06:00:00 AM",
                    etime: "06:00:00 AM"
                })
            }
            SetData(temp)
        }
    }

    return (
        <Container className="mt-3 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SET YOUR AVAILABILITY </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>RECURRING WEEKLY SCHEDULE</Typography>
                <Box>
                    <Button onClick={() => changeMode(!mode)} className={!mode ? "bg-gray color-gray" : ""}>On</Button>
                    <Button onClick={() => changeMode(!mode)} className={mode ? "bg-theme color-theme" : ""}>Off</Button>
                </Box>
            </Box>
            <Box className="mt-3">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SELECT THE DAYS AND TIMING OF YOUR AVAILABILITY </Typography>
            </Box>
            {
                data.map((item, key) => (
                    <Grid key={key} container className={clsx("theme-border theme-border-radius p-1 mt-1", !item.flag && "bg-eee")}>
                        <Grid item md={4} className="d-flex justify-content-between align-items-center">
                            <Box className="d-flex align-items-center">
                                <Typography className="font-weight-bold">{item.name}</Typography>
                                <Typography className="ml-1">{item.date}</Typography>
                            </Box>
                            <Box>
                                <Button onClick={() => updateModeData(item, !item.flag)} className={!item.flag ? "bg-gray color-gray" : ""}>On</Button>
                                <Button onClick={() => updateModeData(item, !item.flag)} className={item.flag ? "bg-theme color-theme" : ""}>Off</Button>
                            </Box>
                        </Grid>
                        <Grid item md={5} className="d-flex justify-content-between align-items-center pl-1">
                            <AirbnbSlider
                                ThumbComponent={AirbnbThumbComponent}
                                defaultValue={[0, 100]}
                                onChange={(e,v) => changeTime(item, v)}
                                disabled={!item.flag}
                            />
                        </Grid>
                        <Grid item md={3} className="d-flex justify-content-center align-items-center">
                            <Typography>{`${item.stime} ${item.etime}`}</Typography>
                        </Grid>
                    </Grid>
                ))
            }
            <Button className="bg-theme color-white mt-2" fullWidth>Save</Button>
        </Container>
    )
}