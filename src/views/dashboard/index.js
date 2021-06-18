import React from "react"
import Box from "@material-ui/core/Box"
import SectionOne from "./sectionOne"
import SectionTwo from "./sectionTwo"
import SectionThree from "./sectionThree"

export default function Dashboard() {
    return (
        <Box className="dashboard">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </Box>
    )
}