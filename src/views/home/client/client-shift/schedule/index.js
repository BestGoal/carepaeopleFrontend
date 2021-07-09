import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { getCurrentShift, cancelCurrentShift } from "../../../../../redux/action/client/shifts/index"
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
        let rdata = await getCurrentShift(dispatch)
        setData(rdata)
    }

    const cancelShift = async (id) => {
        let rdata = await cancelCurrentShift({ id }, dispatch)
        setData(rdata)
    }

    return (
        <Container className="container pt-2 mb-1 worker-home p-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">CURRENT SCHEDULE</Typography>
            </Box>
            {
                data.map((item, key) => (
                    <Box className="worker-job mt-1 theme-border theme-box-shadow" key={key}>
                        <ShiftChild userData={userData} shiftData={item} />
                        <Button onClick={() => cancelShift(item._id)} fullWidth variant="contained" className="accept border-radius-0">CANCEL</Button>
                    </Box>
                ))
            }
        </Container>
    )
}