import React, { useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import ShiftChild from "../../../../baseComponent/shiftChild"
import { getCurrentShiftWorker } from "../../../../../redux/action/worker/shift/index"

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

    return (
        <Box className="worker-home">
            <Container className="worker-job container pt-2 mb-1 p-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">CURRENT SCHEDULE</Typography>
                {
                    data.map((item, key) => (
                        <Box className="mt-1 theme-border theme-box-shadow" key={key}>
                            <ShiftChild userData={item.clientData} shiftData={item} />
                            <Button onClick={() => console.log(item, dispatch)} fullWidth variant="contained" className="bg-theme color-white border-radius-0 accept">CANCEL Shift</Button>
                        </Box>
                    ))
                }
            </Container>
        </Box>
    )
}