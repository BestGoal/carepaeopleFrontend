import React, { useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import ShiftChild from "../../../../baseComponent/shiftChild"
import { getCurrentShiftWorker, cancelShift, sendClockIn } from "../../../../../redux/action/worker/shift/index"

export default function WorkerSchedule() {

    const dispatch = useDispatch();

    const [data, setData] = useState([])

    /*eslint-disable */
    useEffect(() => {
        loadShifts()
    }, [])
    /*eslint-enable */

    const loadShifts = async (count) => {
        let rdata = await getCurrentShiftWorker(dispatch)
        setData(rdata)
    }
    
    const cancelCurrentShift = async (item) => {
        let data = cancelShift(item._id, dispatch)
        setData(data)
    }

    const clockin = async (item) => {
        sendClockIn(item._id, dispatch)
    }

    return (
        <Box className="worker-home">
            <Container className="worker-job container pt-2 mb-1 p-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">CURRENT SCHEDULE</Typography>
                {
                    data.length ? data.map((item, key) => (
                        <Box className="mt-1 theme-border theme-box-shadow" key={key}>
                            <ShiftChild userData={item.clientData} shiftData={item} />
                            <Box className="d-flex">
                                <Button onClick={() => clockin(item)} fullWidth variant="contained" className="bg-theme color-white border-radius-0 accept">Clock In</Button>
                                <Button onClick={() => cancelCurrentShift(item)} fullWidth variant="contained" className="accept">CANCEL</Button>
                            </Box>
                        </Box>
                    )) : <Typography className="text-align-center">Thee is any current shifts</Typography>
                }
            </Container>
        </Box>
    )
}