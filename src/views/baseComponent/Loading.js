import { Box } from "@material-ui/core"
import React from "react"

export default function Loading() {
    return (
        <Box className="loading">
            <Box class="load-1">
                <Box class="line"></Box>
                <Box class="line"></Box>
                <Box class="line"></Box>
            </Box>
            <Box className="over-load"></Box>
        </Box>
    )
}