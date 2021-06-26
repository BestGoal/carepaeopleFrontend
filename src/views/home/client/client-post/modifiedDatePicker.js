import React, { useState, useEffect } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox'
import ArrowLeft from "@material-ui/icons/ArrowLeft"
import ArrowRight from "@material-ui/icons/ArrowRight"
import ModifyClocks from "./modifyClock"
import clsx from "clsx"
import { toast } from 'react-toastify';

const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function ClientPost({ status, dateData, updatePosition }) {

    const [cDate, setCDate] = useState(String(new Date()))
    const [dateNums, setDateNums] = useState([])
    const [multiClock, setMultiClock] = useState(false)

    useEffect(() => {
        makeDateNums(new Date().valueOf())
        setMultiClock(false)
        let cd = new Date();
        let cy = cd.getFullYear();
        let cm = cd.getMonth();
        let day = cd.getDate();
        let date = new Date(`${cy} ${cm} ${day}`).toLocaleDateString()
        setDateData([
            { 
                date,
                start: new Date(date+" 06:00:00 AM").toLocaleTimeString(),
                end: new Date(date+" 10:00:00 AM").toLocaleTimeString(),
            }
        ])
    }, [status])

    const makeDateNums = (date) => {
        let data = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
        ];
        let lastDay = new Date(new Date(date).getFullYear(), new Date(date).getMonth() + 1, 0).getDate();
        let temp = [];
        for (let i = 23; i <= lastDay; i++) {
            temp.push(i)
        }
        data.push(temp);
        setDateNums(data)
    }

    const setCurrentDate = (key) => {
        let d = new Date(cDate);
        let cdv = new Date(`${new Date().getFullYear()} ${new Date().getMonth() + 1}`).valueOf();
        let m = d.getMonth() + 1;
        let date;
        if (key) {
            if (m < 12) {
                date = new Date(`${d.getFullYear()} ${m + 1}`)
            } else {
                date = new Date(`${d.getFullYear() + 1} 1`)
            }
        } else {
            let tDay = 1;
            if (m > 1) {
                if(d.getFullYear() === new Date().getFullYear() && m-1 === new Date().getMonth() + 1) {
                    tDay = new Date().getDate()                   
                }
                date = new Date(`${d.getFullYear()} ${m - 1} ${tDay}`)
            } else {
                if(d.getFullYear()-1 === new Date().getFullYear() && 12 === new Date().getMonth() + 1) {
                    tDay = new Date().getDate()                   
                }
                date = new Date(`${d.getFullYear() - 1} 12 ${tDay}`)
            }
        }
        if (cdv <= new Date(date).valueOf()) {
            setCDate(String(date))
            makeDateNums(date)
        }
    }

    const showCDate = (param) => {
        let date = new Date(param);
        return `${monthArray[date.getMonth()]} - ${date.getFullYear()}`
    }

    const checkDate = (day) => {
        let d = new Date();
        let y = d.getFullYear();
        let m = d.getMonth();
        let cd = new Date(cDate);
        let cy = cd.getFullYear();
        let cm = cd.getMonth();

        if(y === cy && m === cm && cd.getDate() > day) {
            return "disable-num"
        } else if (dateData.findIndex(item => item.date === new Date(`${cy} ${cm} ${day}`).toLocaleDateString()) > -1){
            return "enable-item"
        } else {
            return ""
        }
    }

    const makeDateData = async (day) => {
        let flag = await checkDate(day);
        if(flag === "disable-num") {
            return;
        }
        let tempDateData = dateData;
        let cd = new Date(cDate);
        let cy = cd.getFullYear();
        let cm = cd.getMonth();
        let date = new Date(`${cy} ${cm} ${day}`).toLocaleDateString()
        let index = tempDateData.findIndex(item => item.date === date)
        if(index > -1) {
            let dtData = []
            tempDateData = tempDateData.slice(index, 1)
            for(let i = 0 ; i < dateData.length ; i ++) {
                if(index !== i) {
                    dtData.push(dateData[i])
                }
            }
            setDateData(dtData)
        } else {
            if(status) {
                setDateData([
                    { 
                        date,
                        start: new Date(date+" 06:00:00 AM").toLocaleTimeString(),
                        end: new Date(date+" 10:00:00 AM").toLocaleTimeString(),
                    }
                ])
            } else {
                setDateData([ ...tempDateData, ...[
                    {
                        date,
                        start: new Date(date+" 06:00:00 AM").toLocaleTimeString(),
                        end: new Date(date+" 10:00:00 AM").toLocaleTimeString(),
                    }
                ]])
            }
        }
    }

    const makeMultiClick = () => {
        let tempDateData = dateData;
        if(multiClock) {
            for (let i = 0 ; i < tempDateData.length ; i ++) {
                tempDateData[i].start = new Date(tempDateData[i].date + " 06:00:00 AM").toLocaleTimeString()
                tempDateData[i].end = new Date(tempDateData[i].date + " 10:00:00 AM").toLocaleTimeString()
            }
        }
        setDateData([ ...tempDateData ])
        setMultiClock(!multiClock)
    }

    const changeTimeFunc = (item = false, start, end) => {
        let cs = new Date(new Date().toLocaleDateString() + " " + start).valueOf()
        let ce = new Date(new Date().toLocaleDateString() + " " + end).valueOf()
        if(cs < ce) {
            if(item) {
                let tempDateData = dateData;
                let index = tempDateData.findIndex(it => it.date === item.date);
                if(index > -1) {
                    tempDateData[index].start = start;
                    tempDateData[index].end = end;
                }
                setDateData([ ...tempDateData ])
            } else {
                let tempDateData = dateData;
                for(let i = 0 ; i < tempDateData.length ; i ++) {
                    tempDateData[i].start = start;
                    tempDateData[i].end = end;
                }
                setDateData([ ...tempDateData ])
            }
        } else {
            toast.error("End time have to big than start time.");
        }
    }

    const setDateData = (param) => {
        updatePosition("date", param)
    }

    return (
        <Box>
            <Grid container className="post-item-header">
                <Grid item xs={6} className="d-flex align-items-center">
                    <Typography>{showCDate(cDate)}</Typography>
                    <IconButton className="p-0" color="inherit" onClick={() => setCurrentDate(false)}><ArrowLeft /></IconButton>
                    <IconButton className="p-0" color="inherit" onClick={() => setCurrentDate(true)}><ArrowRight /></IconButton>
                </Grid>
                {
                    (!status && dateData.length > 1) &&
                        <Grid 
                            xs={6} 
                            item 
                            className="d-flex align-items-center justify-content-center crusor-pointer" 
                            onClick={()=>makeMultiClick()}
                        >
                            <Checkbox color="primary" checked={multiClock} />
                            <Typography>Select different timings for each day</Typography>
                        </Grid>
                }
            </Grid>
            <TableContainer component={Paper} className="modify-tbl">
                <Table aria-label="simple table">
                    <TableBody>
                        {
                            dateNums.map((dateItem, dateKey) => (
                                <TableRow key={dateKey} className="p-1">
                                    {
                                        dateItem.map((dtItem, dtkey) => (
                                            <TableCell align="center" key={dtkey}>
                                                <IconButton 
                                                    className={clsx("date-num", checkDate(dtItem))} 
                                                    color="inherit" 
                                                    onClick={() => makeDateData(dtItem)}
                                                >
                                                    <Typography className="fs-1 font-weight-bold">{dtItem}</Typography>
                                                </IconButton>
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <ModifyClocks 
                multiClock={multiClock} 
                dateData={dateData} 
                changeTimeFunc={changeTimeFunc} 
                makeMultiClick={makeMultiClick}
            />
        </Box>
    )
}