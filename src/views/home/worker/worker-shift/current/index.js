import React from "react"
import Box from "@material-ui/core/Box"
import Shifts from "../../worker-dashboard/schedule"

export default function WorkerCurrentShift() {
  return (
    <Box className="worker-dashboard">
        <Shifts />
    </Box>
  )
}