import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export default function SetDistance() {

    return (
        <Container className="container pt-2 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> SET DISTANCE FILTER </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>Show shifts within 100 kms of your postal code M8W1H8</Typography>
                <Button className="bg-theme color-white">EDIT</Button>
            </Box>
        </Container>
    )
}