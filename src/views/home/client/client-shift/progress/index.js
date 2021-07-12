import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { getProgressShift, cancelCurrentShift } from "../../../../../redux/action/client/shifts/index"
import ShiftChild from "../../../../baseComponent/shiftChild"

export default function ClientCurrentShifts() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData)
    const [data, setData] = useState([])

    /*eslint-disable */
    useEffect(() => {
        loadShifts()
    }, [])
    /*eslint-enable */

    const loadShifts = async (count) => {
        let rdata = await getProgressShift(dispatch)
        setData(rdata)
    }

    const cancelShift = async (id, worker) => {
        let rdata = await cancelCurrentShift({ id, worker }, dispatch)
        setData(rdata)
    }

    const getProgresTime = (item) => {
        let date = item.date;
        for(let i = 0 ; i < date.length ; i ++) {
            if(!date[i].isFinished) {
                return date[i].currentTime
            }
        }
    }

    return (
        <Container className="container pt-2 mb-1 worker-home p-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">SHIFTS IN PROGRESS</Typography>
            </Box>
            {
                data.length ? data.map((item, key) => (
                    <Box className="worker-job mt-1 theme-border theme-box-shadow" key={key}>
                        <ShiftChild userData={userData} shiftData={item} isClient={true} />
                        <Button onClick={() => cancelShift(item._id, item.worker)} fullWidth variant="contained" className="bg-theme color-white border-radius-0 accept">Time Tracking: {getProgresTime(item)}</Button>
                    </Box>
                )) : <Typography className="text-align-center">Time Tracking</Typography>
            }
        </Container>
    )
}