import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { locationData, dutyData, covidData } from "../../../../configs/index"
import { postShiftDirect, sentToEdit } from "../../../../redux/action/client/shifts/index"
import ShiftChild from "../../../baseComponent/shiftChild"

export default function ClientShiftsPosts() {
    
    const history = useHistory();
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.userData)
    const storeShiftData = useSelector(state => state.client.shift.shiftData)
    const templateShift = {
        job_position: locationData[0].value,
        vacancies: 1,
        rate: 15,
        dateType: true,
        date: [
            {
                date: new Date().toLocaleDateString(),
                start: new Date(new Date().toLocaleDateString() + " 06:00:00 AM").toLocaleTimeString(),
                end: new Date(new Date().toLocaleDateString() + " 06:00:00 PM").toLocaleTimeString(),
            }
        ],
        note: "",
        eventName: "",
        unpaid_break: 0,
        transit_allowance: 0,
        address: [
            `${userData.streetNumber} ${userData.streetName} ${userData.city} ${userData.province} ${userData.zipcode} ${userData.country}`
        ],
        duty: dutyData[0].value,
        covid: covidData[0].value
    }
    const [shiftData, setShiftData] = useState(templateShift)


    /*eslint-disable */
    useEffect(() => {
        if (!Object.keys(storeShiftData).length) {
            history.push("/client-post")
        }
        setShiftData(storeShiftData)
    }, [storeShiftData])
    /*eslint-enable */

    return (
        <Container className="container pt-2 mb-1 worker-home p-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">POST SHIFT PREVIEW</Typography>
            </Box>
            <Box className="worker-job mt-1 theme-border theme-box-shadow">
                <ShiftChild userData={userData} shiftData={shiftData} />
                <Box className="d-flex">
                    <Button onClick={() => sentToEdit(shiftData, dispatch)} fullWidth variant="contained" className="accept border-radius-0">EDIT</Button>
                    <Button onClick={() => postShiftDirect(shiftData, dispatch)} fullWidth variant="contained" className="accept bg-theme color-white border-radius-0">POST</Button>
                    <Button onClick={() => history.goBack()} fullWidth variant="contained" className="accept border-radius-0">DISCARD</Button>
                </Box>
            </Box>
        </Container>
    )
}