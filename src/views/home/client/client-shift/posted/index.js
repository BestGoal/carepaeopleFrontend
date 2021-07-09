import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import { getShiftDirect, removeShiftDirect } from "../../../../../redux/action/client/shifts/index"
import ShiftChild from "../../../../baseComponent/shiftChild"

export default function ClientShiftsPosts() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData)
    const [data, setData] = useState([])
    const [itemCount, setItemCount] = useState(5)

    /*eslint-disable */
    useEffect(() => {
        loadShifts(itemCount)
    }, [])
    /*eslint-enable */

    const loadShifts = async (count) => {
        let rdata = await getShiftDirect({ count }, dispatch)
        console.log(rdata)
        setData(rdata)
        setItemCount(rdata.length)
    }

    const deleteShift = async (id) => {
        let rdata = await removeShiftDirect({ id, count: 5 }, dispatch)
        setData(rdata)
        setItemCount(rdata.length)
    }

    return (
        <Container className="container pt-2 mb-1 worker-home p-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5">POSTED DIRECT SHIFTS</Typography>
            </Box>
            {
                data.length ? data.map((item, key) => (
                    <Box className="worker-job mt-1 theme-border theme-box-shadow" key={key}>
                        <ShiftChild userData={userData} shiftData={item} />
                        <Button onClick={() => deleteShift(item._id)} fullWidth variant="contained" className="accept border-radius-0">DELETE</Button>
                    </Box>
                )) : <Typography className="text-align-center">Thee is any posted shifts</Typography>
            }
            <Box className="d-flex justify-content-center mt-2">
                <Button onClick={() => loadShifts(itemCount + 5)} variant="contained" fullWidth>Load More</Button>
            </Box>
        </Container>
    )
}