import React from "react"
import Box from "@material-ui/core/Box"
import Profile from "./profile.js"

export default function ClientHome() {
    return (
        <Box className="client-home pt-4">
            <Profile />
        </Box>
    )
}