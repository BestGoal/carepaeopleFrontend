import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function ClientWallet() {
    return (
        <Container className="client-home mt-4 mb-1">
            <Typography variant="h5" className="text-align-center font-weight-bold"> CREDIT NOTES </Typography>
            <Box className="p-3 mt-1 theme-border theme-box-shadow theme-border-radius client-profile">
                <Box>
                    <Typography className="color-gray text-align-center">Available</Typography>
                </Box>
                <Box>
                    <Typography className="font-weight-bold text-align-center" variant="h5">CA$ 0</Typography>
                </Box>
                <Box className="mt-1">
                    <TextField fullWidth variant="outlined" label="Voucher Code" />
                </Box>
                <Box className="mt-1">
                    <Button fullWidth variant="outlined" className="bg-theme color-white" >REDEEM</Button>
                </Box>
            </Box>
        </Container>
    )
}