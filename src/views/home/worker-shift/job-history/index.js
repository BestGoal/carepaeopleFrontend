import React from "react";

import Box from "@material-ui/core/Box"

import JobHistory from "./job-history.js"

const ShiftJobHistory = () => {
    return (
        <Box className="worker-dashboard">
            <JobHistory />
        </Box>
    )
}

export default ShiftJobHistory;