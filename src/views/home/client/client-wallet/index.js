import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

export default function ClientWallet() {
    return (
        <Container className="client-home mt-4 mb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> WALLET </Typography>
            <Box className="p-3 mt-1 theme-border theme-box-shadow theme-border-radius client-profile">
                <Box>
                    <Typography className="color-gray text-align-center">Available Balance</Typography>
                </Box>
                <Box>
                    <Typography className="font-weight-bold text-align-center" variant="h5">CA$ 0.00</Typography>
                </Box>
                <Box className="mt-1">
                    <Button fullWidth variant="outlined" className="bg-theme color-white" >ADD MONEY</Button>
                </Box>
            </Box>
        </Container>
    )
}