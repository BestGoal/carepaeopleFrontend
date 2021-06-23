import React from "react"
import Box from "@material-ui/core/Box"
import Profile from "./profile.js"
import Contact from "./contact.js"
import Skill from "./skill.js"

export default function Dashboard() {
	return (
		<Box className="worker-home container pt-2">
			<Profile />
			<Contact />
			<Skill />
		</Box>
	)
}