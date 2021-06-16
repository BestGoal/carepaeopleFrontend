import { Box } from "@material-ui/core"
import React from "react"

export default function Loading() {
    return (
        <Box className="loading">
            <Box className="load-1">
                <Box className="line"></Box>
                <Box className="line"></Box>
                <Box className="line"></Box>
            </Box>
            <Box className="over-load"></Box>
        </Box>
    )
}