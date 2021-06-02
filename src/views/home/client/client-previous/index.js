import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import CancelPresentation from "@material-ui/icons/CancelPresentation"

export default function ClientProfile() {
    return (
        <Container className="client-home mt-4 mb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> PREVIOUS WORKERS </Typography>
            <Box className="p-3 mt-1 theme-border theme-box-shadow theme-border-radius client-profile">
                <Box className="text-align-center">
                    <CancelPresentation style={{ width: "100px", height: "100px" }} />
                    <Typography>No workers found.</Typography>
                </Box>
            </Box>
        </Container>
    )
}