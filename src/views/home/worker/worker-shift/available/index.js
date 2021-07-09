import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import { getShiftWorker, acceptShift } from "../../../../../redux/action/worker/shift/index"
import ShiftChild from "../../../../baseComponent/shiftChild"

export default function WorkerJob() {

    const dispatch = useDispatch();

    const [mode, setMode] = useState(true)
    const [itemCount, setItemCount] = useState(5)
    const [data, setData] = useState([])

    /*eslint-disable */
    useEffect(() => {
        loadShifts(itemCount)
    }, [])
    /*eslint-enable */

    const loadShifts = async (count) => {
        let rdata = await getShiftWorker({ count }, dispatch)
        setData(rdata)
        setItemCount(rdata.length)
    }

    return (
        <Box className="worker-home">
            <Container className="worker-job container pt-2 mb-1 p-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">AVAILABLE SHIFTS</Typography>
                <Grid container spacing={2} className="mt-1 align-items-center">
                    <Grid item md={6} xs={12}>
                        <TextField fullWidth variant="outlined" label="Search by company name" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box className="worker-select-type d-flex align-items-center">
                            <Button fullWidth className={mode ? "bg-theme color-white" : ""} onClick={() => setMode(true)}> SORT BY DISTANCE </Button>
                            <Button fullWidth className={!mode ? "bg-theme color-white" : ""} onClick={() => setMode(false)}> SORT BY DATES </Button>
                        </Box>
                    </Grid>
                </Grid>
                {
                    data.map((item, key) => (
                        <Box className="mt-1 theme-border theme-box-shadow" key={key}>
                            <ShiftChild userData={item.clientData} shiftData={item} />
                            <Button onClick={()=>acceptShift(item, dispatch)} fullWidth variant="contained" className="bg-theme color-white border-radius-0 accept">Accept Shift</Button>
                        </Box>
                    ))
                }
                <Button onClick={()=>loadShifts(itemCount + 5)} variant="contained" fullWidth className="mt-2">Load More</Button>
            </Container>
        </Box>
    )
}