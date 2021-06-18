import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export default function SetNotification() {
    const [mode, SetMode] = React.useState(true)

    return (
        <Container className="container pt-2 mb-1">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> NOTIFICATIONS </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>PUSH NOTIFICATIONS</Typography>
                <Box className="bg-eee">
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "bg-gray color-gray": ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-theme": ""}>Off</Button>
                </Box>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1 mt-1">
                <Typography>SMS</Typography>
                <Box className="bg-eee">
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "bg-gray color-gray": ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-theme": ""}>Off</Button>
                </Box>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1 mt-1">
                <Typography>EMAIL</Typography>
                <Box className="bg-eee">
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "bg-gray color-gray": ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-theme": ""}>Off</Button>
                </Box>
            </Box>
        </Container>
    )
}