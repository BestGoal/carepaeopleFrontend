import React from "react"
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Message() {
    return (
        <Container className="mt-1 mb-1">
            <Card className="p-1 theme-border theme-box-shadow">
                <CardContent>
                    <Box>
                        <Typography className="text-align-center font-weight-bold" variant="h6">GENERAL MESSAGE</Typography>
                    </Box>
                    <Box className="mt-2">
                        <Typography className="text-align-center font-weight-bold">
                            This messages are from admin.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}