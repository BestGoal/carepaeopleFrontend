import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export default function WorkerNillingTax() {

    const [mode, SetMode] = React.useState(true)

    return (
        <Container className="mt-4 worker-billing container pt-2">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> INSTANT PAY </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>Enable Instant Pay</Typography>
                <Box className="btn-home">
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "on-btn": ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-white off-btn":""}>Off</Button>
                </Box>
            </Box>
        </Container>
    )
}