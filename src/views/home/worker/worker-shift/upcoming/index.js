import React from "react"
import Box from "@material-ui/core/Box"
import Shifts from "../../worker-home/upcoming"

export default function WorkerCurrentShift() {
  return (
    <Box className="worker-home container">
      <Shifts />
    </Box>
  )
}