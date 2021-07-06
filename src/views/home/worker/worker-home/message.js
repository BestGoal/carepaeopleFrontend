import React from "react"
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function WorkerMessage() {
    return (
        <Container className="p-1">
            <Box>
                <Typography className="text-align-center font-weight-bold" variant="h6">GENERAL MESSAGE</Typography>
            </Box>
            <Box className="mt-1 p-1 theme-border theme-box-shadow">
                <Typography className="text-align-center font-weight-bold">
                    This messages are from admin.
                </Typography>
            </Box>
        </Container>
    )
}