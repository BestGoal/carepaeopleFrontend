import React from "react"
import Box from "@material-ui/core/Box"
import Profile from "./profile.js"
import Schedule from "./schedule.js"
import Jobs from "./job/index"
import Message from "./message.js"

export default function WorkerHome() {
  return (
    <Box className="worker-home pt-4">
      <Profile />
      <Schedule />
      <Jobs />
      <Message />
    </Box>
  )
}