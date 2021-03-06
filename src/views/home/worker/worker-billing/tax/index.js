import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export default function WorkerNillingTax() {

    const [mode, SetMode] = React.useState(true)

    return (
        <Container className="container pt-2 worker-billing">
            <Box className="pb-1">
                <Typography className="text-align-center font-weight-bold" variant="h5"> TAX </Typography>
            </Box>
            <Box className="d-flex justify-content-between align-items-center theme-border theme-box-shadow theme-border-radius p-1">
                <Typography>Enable Tax</Typography>
                <Box className="btn-home">
                    <Button onClick={() => SetMode(!mode)} className={!mode ? "on-btn": ""}>On</Button>
                    <Button onClick={() => SetMode(!mode)} className={mode ? "bg-theme color-white off-btn":""}>Off</Button>
                </Box>
            </Box>
        </Container>
    )
}