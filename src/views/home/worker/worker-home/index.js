import React from "react"
import Box from "@material-ui/core/Box"
import Profile from "./profile.js"
import Upcoming from "../worker-shift/currentSchedule/index"
import Available from "../worker-shift/available/index"
import Message from "./message.js"

export default function WorkerHome() {
	return (
		<Box className="worker-home container pt-2">
			<Profile />
			<Upcoming />
			<Available />
			<Message />
		</Box>
	)
}