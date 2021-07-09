import React, { Fragment } from "react"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import DateRange from "@material-ui/icons/DateRange"
import AvTimer from "@material-ui/icons/AvTimer"
import Payment from "@material-ui/icons/Payment"
import SkipPrevious from "@material-ui/icons/SkipPrevious"
import LocationOn from "@material-ui/icons/LocationOn"
import Warning from "@material-ui/icons/Warning"
import Timer from "@material-ui/icons/Timer"
import ShiftNote from "./ShiftNote"
import { Root } from "../../pre/config"
import { locationData, breakData, dutyData, covidData, weekData, monthArray, transitData } from "../../configs/index"

export default function ClientShiftsPosts({ userData, shiftData }) {

    const getDateRender = () => {
        if (shiftData.dateType) {
            let date = shiftData.date[0]
            let showDate = weekData[new Date(date.date).getDay()] + ". " + monthArray[new Date(date.date).getMonth()] + " " + new Date(date.date).getDate() + ", " + new Date(date.date).getFullYear()

            let start = date.start
            let end = date.end
            let sap = new Date(date.date + ", " + start).getHours() > 12 ? "PM" : "AM"
            let shour = new Date(date.date + ", " + start).getHours() > 12 ? new Date(date.date + ", " + start).getHours() - 12 : new Date(date.date + ", " + start).getHours()
            let sminute = new Date(date.date + ", " + start).getMinutes() < 10 ? "0" + new Date(date.date + ", " + start).getMinutes() : new Date(date.date + ", " + start).getMinutes()
            let eap = new Date(date.date + ", " + end).getHours() > 12 ? "PM" : "AM"
            let ehour = new Date(date.date + ", " + end).getHours() > 12 ? new Date(date.date + ", " + end).getHours() - 12 : new Date(date.date + ", " + end).getHours()
            let eminute = new Date(date.date + ", " + end).getMinutes() < 10 ? "0" + new Date(date.date + ", " + end).getMinutes() : new Date(date.date + ", " + end).getMinutes()
            let showTime = shour + ":" + sminute + " " + sap + " - " + ehour + ":" + eminute + " " + eap

            let time = (new Date(date.date + "," + date.end) - new Date(date.date + ", " + date.start)) / 3600000
            let money = (shiftData.rate * (time - breakData.filter(it => shiftData.unpaid_break === it.value)[0].time)).toFixed(2)
            return <Fragment>
                <Box className="d-flex align-items-center">
                    <DateRange />
                    <Typography className="ml-1">{showDate}</Typography>
                </Box>
                <Box className="d-flex align-items-center">
                    <Timer />
                    <Typography className="ml-1">{showTime}</Typography>
                </Box>
                <Box className="d-flex align-items-center">
                    <AvTimer />
                    <Typography className="ml-1">{`Unpaid Break: ${breakData.filter(it => it.value === shiftData.unpaid_break)[0].title}`}</Typography>
                </Box>
                {
                    shiftData.transit_allowance > 0 ? <Box className="d-flex align-items-center">
                        <AvTimer />
                        <Typography className="ml-1">{`Transit Allowance: ${transitData.filter(it => it.value === shiftData.transit_allowance)[0].title}`}</Typography>
                    </Box> : ""
                }
                <Box className="d-flex align-items-center">
                    <Payment />
                    <Typography className="ml-1"> Pay: ${money} @ ${shiftData.rate}/hr </Typography>
                </Box>
            </Fragment>
        } else {
            let allDate = shiftData.date
            let timeFlag = true
            let firstDate = allDate[0];
            let time = 0
            let breakTime = breakData.filter(it => shiftData.unpaid_break === it.value)[0].time
            for (let i = 0; i < allDate.length; i++) {
                let oneDate = allDate[i];
                if (firstDate.start !== oneDate.start || firstDate.end !== oneDate.end) {
                    timeFlag = false;
                }
                time += (new Date(oneDate.date + "," + oneDate.end) - new Date(oneDate.date + ", " + oneDate.start)) / 3600000
                time -= breakTime
            }
            let money = (shiftData.rate * (time - breakData.filter(it => shiftData.unpaid_break === it.value)[0].time)).toFixed(2)

            if (timeFlag) {
                let showDate = ""

                let start = firstDate.start
                let end = firstDate.end
                let sap = new Date(firstDate.date + ", " + start).getHours() > 12 ? "PM" : "AM"
                let shour = new Date(firstDate.date + ", " + start).getHours() > 12 ? new Date(firstDate.date + ", " + start).getHours() - 12 : new Date(firstDate.date + ", " + start).getHours()
                let sminute = new Date(firstDate.date + ", " + start).getMinutes() < 10 ? "0" + new Date(firstDate.date + ", " + start).getMinutes() : new Date(firstDate.date + ", " + start).getMinutes()
                let eap = new Date(firstDate.date + ", " + end).getHours() > 12 ? "PM" : "AM"
                let ehour = new Date(firstDate.date + ", " + end).getHours() > 12 ? new Date(firstDate.date + ", " + end).getHours() - 12 : new Date(firstDate.date + ", " + end).getHours()
                let eminute = new Date(firstDate.date + ", " + end).getMinutes() < 10 ? "0" + new Date(firstDate.date + ", " + end).getMinutes() : new Date(firstDate.date + ", " + end).getMinutes()
                let showTime = shour + ":" + sminute + " " + sap + " - " + ehour + ":" + eminute + " " + eap

                for (let i = 0; i < allDate.length; i++) {
                    let oneDate = allDate[i];
                    let month = monthArray[new Date(oneDate.date).getMonth()];
                    let date = new Date(oneDate.date).getDate();
                    if (i > 0) {
                        let lastDate = allDate[i - 1];
                        let lastMonth = monthArray[new Date(lastDate.date).getMonth()];
                        if (lastMonth === month) {
                            showDate += date + (allDate.length !== i + 1 ? ", " : "")
                        } else {
                            showDate += month + " " + date + (allDate.length !== i + 1 ? ", " : "")
                        }
                    } else {
                        showDate += month + " " + date + (allDate.length !== i + 1 ? ", " : "")
                    }
                }

                return <Fragment>
                    <Box className="d-flex align-items-center">
                        <DateRange />
                        <Typography className="ml-1">{showDate}</Typography>
                    </Box>
                    <Box className="d-flex align-items-center">
                        <Timer />
                        <Typography className="ml-1">{showTime}</Typography>
                    </Box>
                    <Box className="d-flex align-items-center">
                        <AvTimer />
                        <Typography className="ml-1">{`Unpaid Break: ${breakData.filter(it => it.value === shiftData.unpaid_break)[0].title}`}</Typography>
                    </Box>
                    {
                        shiftData.transit_allowance > 0 ? <Box className="d-flex align-items-center">
                            <AvTimer />
                            <Typography className="ml-1">{`Transit Allowance: ${transitData.filter(it => it.value === shiftData.transit_allowance)[0].title}`}</Typography>
                        </Box> : ""
                    }
                    <Box className="d-flex align-items-center">
                        <Payment />
                        <Typography className="ml-1"> Pay: ${money} @ ${shiftData.rate}/hr </Typography>
                    </Box>
                </Fragment>
            } else {
                let showDate = []
                for (let i = 0; i < allDate.length; i++) {
                    let oneDate = allDate[i];

                    let start = oneDate.start
                    let end = oneDate.end
                    let sap = new Date(oneDate.date + ", " + start).getHours() > 12 ? "PM" : "AM"
                    let shour = new Date(oneDate.date + ", " + start).getHours() > 12 ? new Date(oneDate.date + ", " + start).getHours() - 12 : new Date(oneDate.date + ", " + start).getHours()
                    let sminute = new Date(oneDate.date + ", " + start).getMinutes() < 10 ? "0" + new Date(oneDate.date + ", " + start).getMinutes() : new Date(oneDate.date + ", " + start).getMinutes()
                    let eap = new Date(oneDate.date + ", " + end).getHours() > 12 ? "PM" : "AM"
                    let ehour = new Date(oneDate.date + ", " + end).getHours() > 12 ? new Date(oneDate.date + ", " + end).getHours() - 12 : new Date(oneDate.date + ", " + end).getHours()
                    let eminute = new Date(oneDate.date + ", " + end).getMinutes() < 10 ? "0" + new Date(oneDate.date + ", " + end).getMinutes() : new Date(oneDate.date + ", " + end).getMinutes()
                    let showTime = shour + ":" + sminute + " " + sap + " - " + ehour + ":" + eminute + " " + eap

                    showDate.push(
                        weekData[new Date(oneDate.date).getDay()] + ". " +
                        monthArray[new Date(oneDate.date).getMonth()] + " " +
                        new Date(oneDate.date).getDate() + ": " +
                        showTime
                    )
                }

                return <Fragment>
                    <Box className="d-flex align-items-center">
                        <DateRange />
                        <Box>
                            {
                                showDate.map((item, key) => (
                                    <Typography key={key} className="ml-1">{item}</Typography>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box className="d-flex align-items-center">
                        <AvTimer />
                        <Typography className="ml-1">{`Unpaid Break: ${breakData.filter(it => it.value === shiftData.unpaid_break)[0].title}`}</Typography>
                    </Box>
                    {
                        shiftData.transit_allowance > 0 ? <Box className="d-flex align-items-center">
                            <AvTimer />
                            <Typography className="ml-1">{`Transit Allowance: ${transitData.filter(it => it.value === shiftData.transit_allowance)[0].title}`}</Typography>
                        </Box> : ""
                    }
                    <Box className="d-flex align-items-center">
                        <Payment />
                        <Typography className="ml-1"> Pay: ${money} @ ${shiftData.rate}/hr </Typography>
                    </Box>
                </Fragment>
            }
        }
    }

    return (
        <Fragment>
            <Box className="p-2">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography className="text-align-center" variant="h5"> {`${userData.firstName} ${userData.lastName}`} </Typography>
                        <Typography className="text-align-center">
                            {`${locationData.filter(it => it.value === shiftData.job_position)[0].title} (${dutyData.filter(it => it.value === shiftData.duty)[0].title})`}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} className="d-flex justify-content-center theme-border-radius">
                        <img src={Root.adminUrl + userData.avatar} alt="" />
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Box className="p-1 height-100">
                            {
                                getDateRender()
                            }
                            <Box className="d-flex align-items-center">
                                <SkipPrevious />
                                <Typography className="ml-1"> Instant pay: Available </Typography>
                            </Box>
                            <Box className="d-flex align-items-center">
                                <Warning />
                                <Typography className="ml-1">{`Covid-19 ${covidData.filter(it => it.value === shiftData.covid)[0].title}`}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className="p-1 d-flex justify-content-center bg-eee">
                <LocationOn />
                <Typography className="ml-1">{`${shiftData.address[0]}`}</Typography>
            </Box>
            <ShiftNote data={shiftData.note} />
        </Fragment>
    )
}