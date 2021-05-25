import React from "react"
import Box from "@material-ui/core/Box"
import Profile from "./profile.js"
import Schedule from "./schedule.js"
import Jobs from "./job.js"
import Message from "./message.js"

export default function Dashboard() {
  return (
    <Box className="worker-dashboard">
      <Profile />
      <Schedule />
      <Jobs />
      <Message />
    </Box>
  )
}